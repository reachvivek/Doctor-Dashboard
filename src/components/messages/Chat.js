import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, VideoCall} from '@material-ui/icons';
import React from 'react';
import "./chatstyle.css";

function Chat() {
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
                <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    Hi,Shiva. How does it look now?
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    Hi,Shiva. How does it look now?
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    Hi,Shiva. How does it look now?
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    Hi,Shiva. How does it look now?
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message">
                    <span className="chat__name">Shiva</span>
                    This is a message from the Patient
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>

                    <p className="chat__message chat__receiver">
                    <span className="chat__name">You</span>
                    Hi,Shiva. How does it look now?
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>  
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input placeholder="Type a message"
                    type="text"
                    />
                    <button type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
