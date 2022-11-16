import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";

export default function User({ singleUser, user, setNewFriend }) {
  const userFriends = user?.friends.map((friend) => {
    return friend.id;
  });
  const [userFriendsIds, setUserFriendsIds] = useState(userFriends);

  const handleAddFriend = (e) => {
    e.preventDefault();
    const newMatch = {
      friend_id: singleUser.id, 
      user_id: user?.id
    };
    fetch(`/matches`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMatch),
    })
    .then((res) => res.json())
    .then(() => setUserFriendsIds([...userFriendsIds, singleUser.id]))
    .then(() => setNewFriend(singleUser))
}

  return (
    <>
      <li className="drop-down-users">
        <img alt={singleUser.first_name} src={singleUser.profile_picture}></img>
        <p>
          {singleUser.first_name} {singleUser.last_name}
        </p>
        {userFriendsIds.includes(singleUser.id) ? (
          ""
        ) : (
          <button className="add-friend-btn" onClick={handleAddFriend}>
            <CiSquarePlus />
          </button>
        )}
      </li>
    </>
  );
}
