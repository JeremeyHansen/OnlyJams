import { useState } from 'react'

export default function EditPost(post, setHandleOpen, closeEditPost){
    const [updatedPost, setUpdatedPost] = useState(post.post.post)
    

    console.log(post.post.id)
    const handleEdit = () => {
      const fixedPost = {
        id: post.post.id,
        post: updatedPost,
        saves: post.post.saves,
        likes: post.post.likes,
        comments: post.post.comments,
        created_at: post.post.created_at,
        group_id: post.post.group.id,
        user: post.post.user.id
      }
      fetch(`/posts/${post.post.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fixedPost),
      })
      .then(setHandleOpen(false))
      .then(setUpdatedPost(updatedPost))
  }



      return (
        <div className="popup">
          <div className="popup-inner">
            <button className="submit-button" onClick={closeEditPost}>Return Home</button>
            <h2>Edit Post</h2>
            <form className="form" onSubmit={handleEdit}>
            <input
              name="name"
              required=""
              type="text"
              defaultValue={post.post.post}
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
    