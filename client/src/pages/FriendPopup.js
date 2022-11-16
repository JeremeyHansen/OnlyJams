import '../css/popup.css'

export default function FriendPopup(props, friend){
    return (props.trigger) ? (
        <div className="friend-popup">
            <div className="friend-popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}