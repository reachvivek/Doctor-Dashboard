import React from "react";
import {Button, Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Dashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Live Cases" subtitle="Cases Now" className="text-sm-left" />
    </Row>

    
    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    PID
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Sex
                  </th>
                  <th scope="col" className="border-0">
                    Category
                  </th>
                  <th scope="col" className="border-0">
                    Description
                  </th>
                  <th scope="col" className="border-0">
                    Time Log
                  </th>
                  <th scope="col" className="border-0">
                    Prev History
                  </th>
                  <th scope="col" className="border-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rahul</td>
                  <td>Male</td>
                  <td>Cardiologist</td>
                  <td>Experienced a catastrophic heart attack 5 mins ago</td>
                  <td>21:30 Hours</td>
                  <td>Yes</td>
                  <td>
                    <Button outline theme="success" className="mb-2 mr-1">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shiva</td>
                  <td>Male</td>
                  <td>Psychologist</td>
                  <td>Can't sleep properly due to stress and work load. Not able to enjoy life!</td>
                  <td>18:30 Hours</td>
                  <td>No</td>
                  <td>
                    <Button outline theme="success" className="mb-2 mr-1">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Akshith</td>
                  <td>Male</td>
                  <td>Orthopaedist</td>
                  <td>Fractures reported in the wrist due to excessive coding on Flutter without pause</td>
                  <td>03:30 Hours</td>
                  <td>Yes</td>
                  <td>
                    <Button outline theme="success" className="mb-2 mr-1">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Harshita</td>
                  <td>Female</td>
                  <td>Dermatologist</td>
                  <td>Needs to get rid of Pimples on her skin</td>
                  <td>21:30 Hours</td>
                  <td>Yes</td>
                  <td>
                    <Button outline theme="success" className="mb-2 mr-1">
                      Accept
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Vivek</td>
                  <td>Male</td>
                  <td>Physician</td>
                  <td>Suspected to be Covid + due to violation of Lockdown norms during Lockdown.</td>
                  <td>14:30 Hours</td>
                  <td>No</td>
                  <td>
                    <Button outline theme="success" className="mb-2 mr-1">
                      Accept
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    
  </Container>
);

export default Dashboard;
