import { BiComment } from 'react-icons/bi'
import { FiSave } from 'react-icons/fi'
import { FaThumbsUp } from 'react-icons/fa'
import {useState, useEffect} from 'react'
import '../css/post.css'

export default function Post({ post, user }) {

//   console.log(post)
  return (
    <>
      <div className="post-card">
        <div className="user-post">
          <img className="post-pic"src={user?.profile_picture}></img> 
          <h3>{user?.first_name}</h3>
        </div>
        <h4>{post?.post} </h4>
        {/* <h5>{post?.likes}</h5> */}
          <p>{post?.created_at}</p>
        <div className="btn-container">
          <button>
            <FaThumbsUp />
          </button>
          <button>
            <BiComment />
          </button>
          <button>
            <FiSave />
          </button>
        </div>
        <h5></h5>
      </div>
    </>
  )
}
