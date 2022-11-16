import { useState } from "react";
import FriendSearch from './FriendSearch.js'

export default function NewMessage({ user, setOpenNewMessage }) {
  const [ friendSearchOpen, setFriendSearchOpen ] = useState(false);
  const [ friendSearchTerm, setFriendSearchTerm ] = useState("");
  const [ friendName, setFriendName ] = useState("");
  const [ friendId, setFriendId ] = useState();
  const [ message, setMessage ] = useState("")

  const friendsToDisplay = user?.friends.filter((user) =>
    (user.first_name + user.last_name)
      .toLowerCase()
      .includes(friendSearchTerm.toLowerCase())
  );

  function handleFriendSearch(event) {
    setFriendSearchTerm(event.target.value);
  }

  const handleOpenFriendSearch = () => {
    setFriendSearchOpen(true);
  };
  const handleCloseFriendSearch = () => {
    setFriendSearchOpen(false);
  };

  function sendMessage(e) {
    e.preventDefault();
    const newMessage = {
      user_id: friendId,
      friend_id: user?.id,
      message: message
    };
    fetch(`/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    })
    .then((res) => res.json())
    .then(() => setOpenNewMessage(false))
    .then(res => console.log(res))
  }

  return (
    <div className="new-message-popup">
      <div className="new-message-popup-inner">
        <button
          className="message-submit-btn"
          onClick={() => {
            setOpenNewMessage(false);
          }}
        >
          Return To Messages
        </button>
        <h1>Send a Message</h1>
        <form className="new-message-form" onSubmit={sendMessage}>
          <input
            name="friend"
            required=""
            placeholder="Send Message to a Friend..."
            type="text"
            onChange={handleFriendSearch}
            onClick={handleOpenFriendSearch}
            defaultValue={friendName}
          ></input>
          {friendSearchOpen && (
            <div className="all-friends-list">
              {friendSearchOpen &&
                friendsToDisplay
                  .sort((a, b) => a.first_name.localeCompare(b.first_name))
                  .map((singleUser) => {
                    return (
                      <FriendSearch
                        key={singleUser.id}
                        singleUser={singleUser}
                        user={user}
                        setFriendName={setFriendName}
                        setFriendSearchOpen={setFriendSearchOpen}
                        setFriendId={setFriendId}
                      />
                    );
                  })}
              {friendSearchOpen && (
                <button
                  className="closest-friend-list"
                  onClick={handleCloseFriendSearch}
                >
                  X
                </button>
              )}
            </div>
          )}
          <input
            name="message"
            required=""
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Start typing!"
          />
        </form>
        <button className="submit-button" type="submit" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
