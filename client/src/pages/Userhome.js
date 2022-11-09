import "../css/userhome.css";
import { useState } from "react";
import Friend from './Friend.js';
import Group from './Group.js';


export default function Userhome({ user }) {
  console.log(user?.friends)
  const [post, setPost] = useState("");
  const [ allPosts, setAllPosts ] = useState([]);
  const [ userFriends, setUserFriends ] = useState([]);
  const [ userGroups, setUserGroups ] = useState([]);


  return (
    <>
    <div className="userhome-container">
      <div className="group-container">
        <h1 className="side-title">Groups</h1>
        {user?.groups.map((group) => {
        return (
          <Group key={group.id} group={group} />
        )
      })}
      </div>
      <div className="posts-container">
        <div className="form-container">
            <img className="post-img" src={user?.profile_picture}></img>
          <form>
            <input
            className="post-input"
              name="firstName"
              placeholder={user?.first_name + ", what music are you listening to today..."}
              required=""
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </form>
        </div>
        <div className="post-list">
        </div>
      </div>
      <div className="friend-container">
      <h1 className="side-title">Friends</h1>
      {user?.friends.map((friend) => {
        return (
          <Friend key={friend.id} friend={friend} />
        )
      })}
      </div>
    </div>
    </>
  );
}
