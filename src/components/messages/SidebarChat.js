import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from '../../firebase';
import "./sidebarchat.css";

function SidebarChat({id, name, avatar, addPatient}) {

    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id) {
            db.collection("patients")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }// eslint-disable-next-line
    }, [])

    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/messages/${id}`}>
        <div className="sidebarChat">
            <Avatar src={avatar} />
            <div className = "sidebarChat__info">
                <p className="header__sidebarChat">{name}</p>
                <p className="lasttext__sidebarChat"> {messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    )
}

export default SidebarChat
