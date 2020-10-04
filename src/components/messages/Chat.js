import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined, VideoCall} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import "./chatstyle.css";
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import firebase from "firebase";

function Chat() {

        const [input, setInput] = useState("");
        const {patientId} = useParams();
        const [patient, setPatients] = useState("")
        const [avatar, setAvatar] = useState("")
        const [messages, setMessages] = useState([])
        // eslint-disable-next-line
        const [{user}, dispatch] = useStateValue()

        useEffect(() => {
            if (patientId) {
                db.collection('patients').doc(patientId).onSnapshot(snapshot => (setPatients(snapshot.data().name)));
                db.collection('patients').doc(patientId).onSnapshot(snapshot => (setAvatar(snapshot.data().avatar)));
                db.collection('patients').doc(patientId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => 
                    (setMessages(snapshot.docs.map(doc=> doc.data()))
                    ))
            }
        }, [patientId])


        const sendMessage = (e) => {
        e.preventDefault();

        db.collection('patients').doc(patientId).collection('messages').add({
            message: input,
            name: user?.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // axios.post('/messages/new', {
        //     message:input,
        //     name:"Akshith",
        //     timestamp:"Just now",
        //     received: true,
        // })
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={avatar}/>
                <div className="chat__headerInfo">
                    <p className="header__patientName">{patient}</p>
                    <p className="header__lastSeen">Last seen {" "}
                    {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <a href="https://desolate-cliffs-58938.herokuapp.com/" target="_blank"><IconButton>
                        <VideoCall/>
                    </IconButton>
                    </a>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}
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
