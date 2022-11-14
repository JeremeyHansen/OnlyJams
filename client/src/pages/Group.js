import "../css/group.css";
import { useState, useEffect } from "react";
import GroupPost from "./GroupPost.js";

export default function Group({ group, user }) {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("");
  const [allPosts, setAllPosts] = useState(group?.posts)

  // console.log(allPosts)
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const text = 'Send Post'
  const [ buttonText, setButtonText ] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text)
    }, 2000)
    return () => clearTimeout(timer)
  }, [buttonText])

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      post: post, 
      user_id: user?.id,
      group_id: group?.id,
      user: user,
      likes: 0,
      saves: 0
    };
    fetch(`/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
    .then((res) => res.json())
    .then(setPost(""))
    .then(setAllPosts([...allPosts, newPost]))
    // .then(console.log(allPosts))
  }

  return (
    <>
      <div className="group-card">
        <h4 className="group-name" onClick={handleOpen}>
          {group?.name}
        </h4>
        {open ? (
          <div className="group-popup">
            <div className="group-popup-inner">
              <button className="group-close-btn" onClick={handleClose}>
                Return Home
              </button>
                <h1>{group?.name}</h1>
              <div className="form-container">
                <img
                  className="post-img"
                  alt={user?.first_name}
                  src={user?.profile_picture}
                  ></img>
                <form onSubmit={handleSubmit}>
                  <input
                    className="post-input"
                    name="post"
                    placeholder={
                      user?.first_name +
                      `, do you want to post some ${group?.name.toLowerCase()} music?`
                    }
                    required=""
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    />
                  <button
                    className="submit-btn"
                    onClick={() => setButtonText("Sent!")}
                    >
                    {buttonText}
                  </button>
                  {/* <dropdown>Dropdown</dropdown> */}
                </form>
              </div>
              {allPosts?.length > 0 ? (
                allPosts?.map((post) => {
                  return <GroupPost key={post.id} user={user} group={group} post={post} setAllPosts={setAllPosts} />;
                }).reverse()
              ) : (
                <h4>No Posts Made Yet For This Group</h4>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
