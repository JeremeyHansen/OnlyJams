import "../css/friend.css"
import { useState } from 'react'
import FriendPopup from './FriendPopup.js'

export default function Friend({ friend }){
    const [ buttonPopup, setButtonPopup ] = useState(false)

    // const handleDelete = (e) => {
    //     e.preventDefault(e)
    //     fetch(`/matches/${match.id}`, {
    //       method: 'DELETE',
    //     })
    //       .then((res) => console.log(res))
    //       .then(() => setButtonPopup(false))
    //   }

      return (
        <>
        <div className="friend-card">
            <img className="friend-pic" alt={friend?.first_name} src={friend?.profile_picture} onClick={() => setButtonPopup(true)}></img>
            <h4 className="friend-name">{friend?.first_name} {friend?.last_name}</h4>
            <FriendPopup friend={friend} trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1><span className="popup-span">{friend?.first_name} {friend?.last_name}  </span> <span className="popup-pronouns">({friend?.pronouns})</span></h1>
                <img className="popup-img"src={friend?.profile_picture} alt={friend?.first_name}></img>
                <p><span className="popup-span">Phone Number: </span>{friend?.phone_number}</p>
                <p><span className="popup-span">Email: </span>{friend?.email}</p>
                <p><span className="popup-span">Birthday: </span>{friend?.birthday}</p>
                {/* <button onClick={handleDelete}>Remove Friend</button> */}
            </FriendPopup>
        </div>
        </>
    )
}