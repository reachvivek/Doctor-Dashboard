import { Avatar } from '@material-ui/core';
import React from 'react'
import "./sidebarchat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className = "sidebarChat__info">
                <p className="header__sidebarChat">Patient Name</p>
                <p className="lasttext__sidebarChat"> This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
