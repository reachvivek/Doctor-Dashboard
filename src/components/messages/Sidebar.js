import React, { useEffect, useState } from 'react';
import "./sidestyle.css";
import SidebarChat from "./SidebarChat";
import {IconButton} from "@material-ui/core";
import {Settings, SearchOutlined, Create, NearMe} from "@material-ui/icons/";
import db from '../../firebase';

function Sidebar() {
    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
        const unsubscribe = db.collection('patients').onSnapshot((snapshot)=>
                setPatients(snapshot.docs.map(doc =>
                    ({
                        id: doc.id,
                        data: doc.data(),
                    })
                ))
            )
            return () => {
                unsubscribe();
            }        
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton>
                        <Create/>
                    </IconButton>
                    <IconButton>
                        <NearMe/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search Patient" type = "text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                {patients.map(patient => (
                    <SidebarChat key={patient.id} id={patient.id}
                    name = {patient.data.name}
                    avatar = {patient.data.avatar}/>
                ))}
                
            </div>


        </div>
    )
}

export default Sidebar;