import React from "react";
import {Container} from "shards-react";
import Sidebar from "../components/messages/Sidebar";
import Chat from "../components/messages/Chat";
import "../components/messages/Messages.css";

const Messages = () => (
  <Container fluid className="main-content-container px-4">
    
    {/* Chat UI */}
    <div className="app">
        <div className="app__body">
            <Sidebar/>
            <Chat/>
        </div>
    </div>

    
  </Container>
);

export default Messages;
