import "../css/messages.css";

export default function MessageCard({ user, message }) {
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
        <h2>{message?.message}</h2>
      </div>
    </>
  );
}
