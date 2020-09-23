import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
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
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p>
                    <span className="chat__name">Shiva</span>
                    This is a message from the Doctor
                    <span className="chat__timestamp">{
                    new Date().toUTCString()}
                    </span>
                    </p>
            </div>
        </div>
    )
}

export default Chat
