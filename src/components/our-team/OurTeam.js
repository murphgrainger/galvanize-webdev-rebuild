import React from 'react';
import {Link} from 'react-router';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

import './our-team.css'

class OurTeam extends React.Component {
    render() {
        return (
          <div className='section'>
            <div className='section-headline'>
              <h2 className='headline'>The Galvanize Advantage</h2>
            </div>
            <Row>
              <Col xs="12" sm="6" md="3">
              <Card block>
                <CardTitle>Instructors</CardTitle>
                <CardText className="description">Teaching development requires very unique people dedicated to their students learning.  We have them.</CardText>
                <Button>See Individual Profiles</Button>
              </Card>
              </Col>
              <Col xs="12" sm="6" md="3">
              <Card block className="text-center">
                <CardTitle>Career Services</CardTitle>
                <CardText className="description">Our Career Services team prepares students to leverage their new technical skills into a career as a full-stack developer.</CardText>
                <Button>See the Team</Button>
              </Card>
              </Col>
              <Col xs="12" sm="6" md="3">
              <Card block className="text-center">
                <CardTitle>Entrepreneurs</CardTitle>
                <CardText className="description">Learn and network surrounded by startup companies in an array of industries.</CardText>
                <Button>List of Tenants</Button>
              </Card>
              </Col>
              <Col xs="12" sm="6" md="3">
              <Card block className="text-center">
                <CardTitle>Student Success</CardTitle>
                <CardText className="description">Our Student Success team ensures your experience as a Galvanize student is everything you imagined it could be.</CardText>
                <Button>See Profile</Button>
              </Card>
              </Col>
            </Row>
            </div>
        );
    }
}

export default OurTeam;
