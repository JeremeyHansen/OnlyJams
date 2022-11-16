import { useState } from "react";
import FriendSearch from "./FriendSearch.js";

export default function NewMessage({ user, message, setOpenResponse }) {
  const [newMessage, setNewMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const responseMessage = {
      user_id: message?.friend.id,
      friend_id: user?.id,
      message: newMessage,
    };
    fetch(`/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(responseMessage),
    })
      .then((res) => res.json())
      .then(() => setOpenResponse(false));
  }

  return (
    <div>
      <div className="response-message-popup">
        <div className="message-container-11">
          <div className="message-container-2">
            <div className="message-container-3">
              <div className="message-container-4">
                <div className="message-container-5">
                  <div className="response-message-popup-inner">
                    <button
                      className="message-submit-btn"
                      onClick={() => {
                        setOpenResponse(false);
                      }}
                    >
                      Return
                    </button>
                    {/* <h1>Respond!</h1> */}
                    <form className="new-message-response-form" onSubmit={sendMessage}>
                      <input
                        name="message"
                        required=""
                        type="text"
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        placeholder={"Respond to " + message?.friend.first_name + "!"}
                      />
                      <button
                        className="submit-button"
                        type="submit"
                        onClick={sendMessage}
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
