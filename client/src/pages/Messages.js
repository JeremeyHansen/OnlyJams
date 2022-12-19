import MessageCard from "./MessageCard.js";
import { useState, useEffect } from "react";
import { BiChat } from "react-icons/bi";
import NewMessage from "./NewMessage.js";

export default function Messages({ user }) {
  const [userMessages, setUserMessages] = useState([]);
  const [openNewMessage, setOpenNewMessage] = useState(false);

  //fetch all messages

  useEffect(() => {
    fetch("/messages")
      .then((res) => res.json())
      .then((data) => setUserMessages(data));
  }, []);

  //filter to just the logged in user's messages
  const messagesToDisplay = userMessages.filter(
    (message) => message.user.id === user?.id
  );
  return (
    <>
      <div className="message-title">
        <h1>Messages</h1>
        <button className="chat-btn" onClick={() => setOpenNewMessage(true)}>
          <BiChat />
        </button>
        {openNewMessage && <NewMessage user={user} setOpenNewMessage={setOpenNewMessage}/>}
      </div>
      <div className="message-container">
        <div className="message-container-1">
          <div className="message-container-2">
            <div className="message-container-3">
              <div className="message-container-4">
                <div className="message-container-5">
                  <div className="message-container-inner">
                    {messagesToDisplay.map((message) => {
                      return (
                        <MessageCard
                          key={message.id}
                          message={message}
                          setUserMessages={setUserMessages}
                          user={user}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
