import { FiSave } from 'react-icons/fi'
import { FaThumbsUp } from 'react-icons/fa'
import { useState } from 'react'
import '../css/post.css'

export default function Post({ post, friend }) {

  const [ postLikes, setPostLikes ] = useState(post.likes)
  const [buttonClassName, setButtonClassName] = useState("like-btns")

  function handleLike(e){
    e.preventDefault()
    const fixedLikes = post.likes + 1
    const fixedPost = {
      post_id: post.id,
      post: post,
      saves: post.saves,
      likes: fixedLikes,
      created_at: post.created_at,
      group: post.group,
      user: post.user
    }
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fixedPost),
    })
      setPostLikes(fixedLikes)
      setButtonClassName("liked-btn")
    }

  return (
    <>
      <div className="post-card">
        <div className="user-post">
          <img alt={friend?.first_name} className="post-pic"src={friend?.profile_picture}></img> 
          <h3>{friend?.first_name} {friend?.last_name}</h3>
        <p className="like-count">Likes: {postLikes}</p>
        </div>
        <h4>{post?.post} </h4>
        {/* <h5>{post?.likes}</h5> */}
        <div className="btn-container">
          <button className="like-btns" onClick={handleLike}>
            <FaThumbsUp className={buttonClassName}/>
          </button>
          <button className="like-btns">
            <FiSave className="like-btns"/>
          </button>
        </div>
        {/* <h5></h5> */}
      </div>
    </>
  )
}
