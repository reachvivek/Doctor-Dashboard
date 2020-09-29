import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem
} from "shards-react";

const PatientDetails = ({ patientDetails }) => (
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
      <Button pill outline size="sm" className="mb-2">
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

PatientDetails.propTypes = {
  /**
   * The user details object.
   */
  PatientDetails: PropTypes.object
};

PatientDetails.defaultProps = {
  patientDetails: {
    name: "Akshith Chittiveli",
    avatar: require("./../../images/avatars/akshith.jpeg"),
    email: "akshithchittiveli@gmail.com",
    metaTitle: "Notes",
    metaValue:
      "This patient has had a case of wrist fracture last reported"
  }
};

export default PatientDetails;
