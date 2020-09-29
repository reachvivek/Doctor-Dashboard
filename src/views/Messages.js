import React, { useEffect, useState } from "react";
import {Container, Row} from "shards-react";
import Sidebar from "../components/messages/Sidebar";
import Chat from "../components/messages/Chat";
import PageTitle from "../components/common/PageTitle";
import "../components/messages/Messages.css";
import Pusher from 'pusher-js';
import axios from "../axios";


const Messages = () => 
{

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('b985966bbe3d82cec18d', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
      channel.bind('inserted', (newMessage) => {
        setMessages([...messages, newMessage] )
      });

      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      };
    }, [messages]);
    
    console.log(messages);

return (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="My Patients" subtitle="Threads" className="text-sm-left" />
    </Row>
    
    {/* Chat UI */}
    <div className="app">
        <div className="app__body">
            <Sidebar/>
            <Chat messages={messages}/>
        </div>
    </div>

    
  </Container>
)};

export default Messages;
