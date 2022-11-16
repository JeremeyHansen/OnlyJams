import { FiSave } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { ImPencil } from "react-icons/im";
import { useState } from 'react'
import EditPost from './EditPost.js'

export default function GroupPost({ group, post, user, setAllPosts }) {
  const [ handleOpen, setHandleOpen ] = useState(false);
  const [ postLikes, setPostLikes ] = useState(post.likes)
  const [ buttonClassName, setButtonClassName] = useState("like-btns")
  const [ postText, setPostText ] = useState(post.post)

  const handleDelete = (id) => {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    setAllPosts((posts) => posts.filter((post) => post.id !== id));
  };

  function closeEditPost(){
    setHandleOpen(false)
  }

  function handleLike(e){
    e.preventDefault()
    const fixedLikes = post.likes + 1
    const fixedPost = {
      likes: fixedLikes,
    }
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixedPost),
    })
      .then(() => setPostLikes(fixedLikes))
      .then(() => setButtonClassName("liked-btn"))
    }

  return (
    <>
      <div className="post-card">
        <div className="user-post">
          <img
            alt={post?.user.first_name}
            className="post-pic"
            src={post?.user.profile_picture}
          ></img>
          <h3>
            {post?.user.first_name} {post?.user.last_name}
          </h3>
          <h4 className="group-post-title">{group?.name}</h4>
        </div>
        <h4>{postText} </h4>
        <div className="like-container">
          <p>Likes: {postLikes}</p>
        </div>
        <div className="btn-container">
          <button className={buttonClassName} onClick={handleLike}>
            <FaThumbsUp />
          </button>
          <button className={buttonClassName}>
            <FiSave />
          </button>
          {user?.id === post?.user.id ? (
            <button className="like-btns" onClick={() => setHandleOpen(true)}>
              <ImPencil />
            </button>
          ) : (
            ""
          )}
          {handleOpen&&<EditPost key={post.id} post={post} setPostText={setPostText} closeEditPost={closeEditPost} setHandleOpen={setHandleOpen}/>}
          {user?.id === post?.user.id ? (
            <button className="like-btns" onClick={() => handleDelete(post.id)}>
              <ImBin />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
