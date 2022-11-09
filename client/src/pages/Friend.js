import "../css/friend.css"

export default function Friend({ friend }){
    return (
        <>
        <div className="friend-card">
            <img className="friend-pic" alt={friend?.first_name} src={friend?.profile_picture}></img>
            <h4 className="friend-name">{friend?.first_name} {friend?.last_name}</h4>
        </div>
        </>
    )
}