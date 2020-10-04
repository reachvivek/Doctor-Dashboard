import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";
import { Link } from "react-router-dom";

const Harshita = ({ patientDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={patientDetails.avatar}
          alt={patientDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{patientDetails.name}</h4>
      <span className="text-muted d-block mb-2">{patientDetails.email}</span>
      <Button tag={Link} to="messages/l35QP4sKmdkAqstty4ez" pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">chat</i> Send Message
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {patientDetails.metaTitle}
        </strong>
        <span>{patientDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

Harshita.propTypes = {
  /**
   * The user details object.
   */
  Harshita: PropTypes.object
};

Harshita.defaultProps = {
  patientDetails: {
    name: "Shelly",
    avatar: require("./../../images/avatars/shelly.png"),
    email: "shelly@gmail.com",
    metaTitle: "Notes",
    metaValue:
      "This patient has Type II Acne on her Skin"
  }
};

export default Harshita;
