
import { BiComment } from 'react-icons/bi'
import { FiSave } from 'react-icons/fi'
import { FaThumbsUp } from 'react-icons/fa'
import { ImBin } from "react-icons/im";
import { ImPencil } from "react-icons/im";



// import { useState } from 'react'

export default function GroupPost({group, post, user, setAllPosts}){
    // const [ thePost, setThePost] = useState(post)



  const handleDelete = (id) => {
    fetch(`/posts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      setAllPosts((posts) =>
          posts.filter((post) => post.id !== id))
  }

    return (
        <>
      <div className="post-card">
        <div className="user-post">
          <img alt={post?.user.first_name} className="post-pic"src={post?.user.profile_picture}></img> 
          <h3>{post?.user.first_name} {post?.user.last_name}</h3>
            <h4 className="group-post-title">
                {group?.name}
            </h4>
        </div>
        <h4>{post?.post} </h4>
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
          {user?.id === post?.user.id ? (<button onClick={() => handleDelete(post.id)}><ImPencil /></button>) : ""}
          {user?.id === post?.user.id ? (<button onClick={() => handleDelete(post.id)}><ImBin /></button>) : ""}
        </div>
      </div>
    </>
    )
}