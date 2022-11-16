import { useState } from 'react'

export default function EditPost({post, setHandleOpen, closeEditPost, setPostText}){
    const [updatedPost, setUpdatedPost] = useState(post.post)
    
    const handleEdit = (e) => {
      e.preventDefault()
      const fixedPost = {
        post: updatedPost,
      }
      fetch(`/posts/${post.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fixedPost),
      })
      .then(() => setHandleOpen(false))
      .then(() => setUpdatedPost(updatedPost))
      .then(() => setPostText(updatedPost))

  }



      return (
        <div className="popup">
          <div className="popup-inner">
            <button className="edit-submit-button" onClick={closeEditPost}>Return To {post?.group.name}</button>
            <h2>Edit Post</h2>
            <form className="form" onSubmit={handleEdit}>
            <input
              name="name"
              required=""
              type="text"
              defaultValue={updatedPost}
              onChange={(e) => setUpdatedPost(e.target.value)}
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
            </form>
          </div>
        </div>
      )
    }
    