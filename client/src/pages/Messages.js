import MessageCard from './MessageCard.js'
import {useState, useEffect} from 'react'
import { BiChat } from "react-icons/bi";


export default function Messages({user}){
    const [ userMessages, setUserMessages ] = useState([])


    const messagesToDisplay = userMessages.filter((message) =>
        message.user.id === user?.id
    );

    useEffect(() => {
        fetch("/messages")
        .then((res) => res.json())
        .then((data) => setUserMessages(data));
      }, []);
    return (
        <>
        <div className="message-title">
            <h1>Messages</h1>
            <button className="chat-btn"><BiChat /></button>
        </div>
        <div className="message-container">

            {messagesToDisplay.map((message) => {
                return <MessageCard key={message.id} message={message} user={user}/>
            })}
        </div>
        </>
    )
}