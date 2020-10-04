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

const Akshith = ({ patientDetails }) => (
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
      <Button tag={Link} to="messages/zI8Pb1QtL7yELimxFDxo" pill outline size="sm" className="mb-2">
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

Akshith.propTypes = {
  /**
   * The user details object.
   */
  Akshith: PropTypes.object
};

Akshith.defaultProps = {
  patientDetails: {
    name: "Alex",
    avatar: require("./../../images/avatars/alex.jpg"),
    email: "alex@gmail.com",
    metaTitle: "Notes",
    metaValue:
      "This patient has had a case of wrist fracture last reported"
  }
};

export default Akshith;
