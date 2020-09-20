import React from 'react';
import "./sidestyle.css";
import {IconButton} from "@material-ui/core";
import {Settings, Duo, MoreVert} from "@material-ui/icons/";

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
        </div>
    )
}

export default Sidebar;