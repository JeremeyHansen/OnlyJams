import "../css/userhome.css";
import { useEffect, useState } from "react";
import Friend from "./Friend.js";
import Group from "./Group.js";
import Post from "./Post.js";

export default function Userhome({ user }) {
  const [post, setPost] = useState("");
  const [allPosts, setAllPosts] = useState([user?.posts]);
  const [userFriends, setUserFriends] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [friendSearchTerm, setFriendSearchTerm] = useState("");
  
  //fetch all the groups/genres
  
  useEffect(() => {
    fetch("/groups")
    .then((res) => res.json())
    .then((data) => setGroups(data));
  }, []);
  
  //genre search bar function
  
  const groupsToDisplay = groups.filter((group) =>
  group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  
  //search for the friends
  
  const friendsToDisplay = user?.friends.filter((friend) =>
  (friend.first_name + friend.last_name)
  .toLowerCase()
  .includes(friendSearchTerm.toLowerCase())
  );
  function handleFriendSearch(event) {
    setFriendSearchTerm(event.target.value);
  }
  
  //send a new post
  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      post: post, 
      user_id: user?.id,
      group_id: 2
    };
    fetch(`/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
    .then((res) => res.json())
    .then(setPost(""))
    // .then(setAllPosts(...allPosts, newPost))
  }
  
  //changes button text on submit 
  const text = 'Send Post'
  const [ buttonText, setButtonText ] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text)
    }, 2000)
    return () => clearTimeout(timer)
  }, [buttonText])
  
  
  return (
    <>
      <div className="userhome-container">
        <div className="group-container">
          <h1 className="side-title">Genres</h1>
          <input
            className="friend-searcher"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          ></input>
          <div className="all-groups">
            {groupsToDisplay.map((group) => {
              return <Group key={group.id} group={group} />;
            })}
          </div>
        </div>
        <div className="posts-container">
          <div className="form-container">
            <img className="post-img" src={user?.profile_picture}></img>
            <form onSubmit={handleSubmit}>
              <input
                className="post-input"
                name="post"
                placeholder={
                  user?.first_name +
                  ", what music are you listening to today..."
                }
                required=""
                type="text"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <button className="submit-btn" onClick={() => setButtonText("Sent!")}>{buttonText}</button>
              {/* <dropdown>Dropdown</dropdown> */}
            </form>
          </div>
          <div className="post-list">
            {user?.posts.map((post) => {
              return <Post key={post.id} post={post} user={user}/>;
            })}
          </div>
        </div>
        <div className="friend-container">
          <h1 className="side-title">Friends</h1>
          <input
            className="friend-searcher"
            placeholder="Search..."
            value={friendSearchTerm}
            onChange={handleFriendSearch}

          ></input>
          <div className="friend-list">
            {friendsToDisplay?.map((friend) => {
              return <Friend key={friend.id} friend={friend} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
