import React from 'react';
import "./sidestyle.css";
import SidebarChat from "./SidebarChat";
import {IconButton} from "@material-ui/core";
import {Settings, Duo, MoreVert, SearchOutlined} from "@material-ui/icons/";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton>
                        <Settings/>
                    </IconButton>
                    <IconButton>
                        <Duo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search patient" type = "text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>


        </div>
    )
}

export default Sidebar;