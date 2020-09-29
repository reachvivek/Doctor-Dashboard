import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, VideoCall} from '@material-ui/icons';
import React, { useState } from 'react';
import "./chatstyle.css";
import axios from '../../axios';

function Chat({messages}) {

        const [input, setInput] = useState("");
        const sendMessage = (e) => {
        e.preventDefault();

        axios.post('/messages/new', {
            message:input,
            name:"Akshith",
            timestamp:"Just now",
            received: true,
        })
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <p className="header__patientName">Patient Name</p>
                    <p className="header__lastSeen">Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <VideoCall/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timestamp}
                        </span>
                        </p>
                ))}                    
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
