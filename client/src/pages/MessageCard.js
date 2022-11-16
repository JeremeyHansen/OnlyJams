import "../css/messages.css";
import { ImBin } from "react-icons/im";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useState } from 'react'
import ResponseMessage from './ResponseMessage.js'

export default function MessageCard({ user, message, setUserMessages }) {

  const [openResponse, setOpenResponse] = useState(false)

  const handleDelete = (id) => {
    fetch(`/messages/${message.id}`, {
      method: "DELETE",
    }).then((res) => console.log(res));
    setUserMessages((userMessages) =>
      userMessages.filter((message) => message.id !== id)
    );
  };

  return (
    <>
      <div className="message-card">
        <div className="friend-message-name">
          <h3>
            From: {message?.friend.first_name} {message?.friend.last_name}
          </h3>
          <img
            src={message?.friend.profile_picture}
            alt={message?.friend.first_name}
          ></img>
        </div>
        <div className="message-bottom">
        <h2>{message?.message}</h2>
        <div>
        <button
          className="trash-btn"
          onClick={() => handleDelete(message?.id)}
        >
          <ImBin />
        </button>
        <button title="Respond!" className="trash-btn" onClick={(() => setOpenResponse(true))}>
          <BiMessageRoundedDetail />
        </button>
        {openResponse&&(<ResponseMessage setOpenResponse={setOpenResponse} message={message} user={user}/>)}
        </div>
        </div>
      </div>
    </>
  );
}
