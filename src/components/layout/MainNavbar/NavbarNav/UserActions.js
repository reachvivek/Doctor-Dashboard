import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

import { useStateValue } from "../../../../StateProvider";

export default function UserActions (props) {
  
  const [visible, setVisible] = useState([])

  const toggleUserActions = e => {
    if(!setVisible) {
      setVisible(visible);
    }
    if(setVisible) {
      setVisible(!visible);
    }
  }

    const refreshPage = e => {
      window.location.reload();
    }

    const [{user}] = useStateValue();

    return (
      <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={user?.photoURL}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">{user?.displayName}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={!visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> My Patients
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem type="button" onClick={refreshPage} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
