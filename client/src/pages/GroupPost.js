import { FiSave } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { ImPencil } from "react-icons/im";
import { useState } from 'react'
import EditPost from './EditPost.js'

export default function GroupPost({ group, post, user, setAllPosts }) {
  const [ handleOpen, setHandleOpen ] = useState(false);

  const handleDelete = (id) => {
    fetch(`/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    setAllPosts((posts) => posts.filter((post) => post.id !== id));
  };

  //   const handleEdit = (id) => {
  //     const fixedPost = {
  //       post_id: post.id,
  //       post: {newPost},
  //       saves: post.saves,
  //       likes: post.likes,
  //       created_at: post.created_at,
  //       group: post.group,
  //       user: post.user
  //     }
  //     fetch(`/posts/${id}`, {
  //       method: 'PATCH',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(fixedPost),
  //     })
  // }

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
        <h4>{post?.post} </h4>
        <div className="like-container">
          <p>Likes: {post?.likes}</p>
        </div>
        <div className="btn-container">
          <button className="like-btns">
            <FaThumbsUp />
          </button>
          <button className="like-btns">
            <FiSave />
          </button>
          {user?.id === post?.user.id ? (
            <button className="like-btns" onClick={() => setHandleOpen(true)}>
              <ImPencil />
            </button>
          ) : (
            ""
          )}
          {handleOpen&&<EditPost post={post} setHandleOpen={setHandleOpen}/>}
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
