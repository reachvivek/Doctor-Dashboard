import React from "react";
import {Container, Row} from "shards-react";
import Sidebar from "../components/messages/Sidebar";
import Chat from "../components/messages/Chat";
import PageTitle from "../components/common/PageTitle";
import "../components/messages/Messages.css";

const Messages = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="My Patients" subtitle="Threads" className="text-sm-left" />
    </Row>
    
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
