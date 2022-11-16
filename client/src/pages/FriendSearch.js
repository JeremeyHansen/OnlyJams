export default function FriendSearch({ singleUser, setFriendName, setFriendSearchOpen, setFriendId }) {

  function handleClick(){
    setFriendName(singleUser.first_name + " " + singleUser.last_name);
    setFriendSearchOpen(false);
    setFriendId(singleUser.id)
  }
  return (
    <>
      <li
        className="drop-down-users"
        onClick={handleClick}
      >
        <p>
          {singleUser.first_name} {singleUser.last_name}
        </p>
      </li>
    </>
  );
}
