import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PatientDetails from "../components/patient-profile/PatientDetails";
import Akshith from "../components/patient-profile/Akshith";
import Shiva from "../components/patient-profile/Shiva";
import Harshita from "../components/patient-profile/Harshita";
import Shriya from "../components/patient-profile/Shriya";


const MyPatients = () => (
    <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Patient List" subtitle="My Patients" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="3">
        <Harshita/>
      </Col>
      <Col lg="3">
        <Shriya/>
      </Col>
      <Col lg="3">
        <Shiva/>
      </Col>
      <Col lg="3">
        <Akshith/>
      </Col>
    </Row>
  </Container>
);

export default MyPatients;
