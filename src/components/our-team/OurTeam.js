import React from 'react';
import {Link} from 'react-router';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

import ProfileGrid from '../profile-grid/ProfileGrid';

import './our-team.css'

class OurTeam extends React.Component {
    render() {
        return (
          <div className='section'>
            <div className='section-headline'>
              <h2 className='headline'>The Galvanize Advantage</h2>
                <Col sm='12' className="lead-text-column">
                  <p className="lead">Galvanize campuses are designed from the ground up to be conducive to learning to code. From the classrooms and the lab space to the carefully vetted companies renting workspaces: <br></br><span>Galvanize is the learning community for technology.</span></p>
                </Col>
            </div>
            <ProfileGrid />
            <Row className="card-row">
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Instructors</CardTitle>
                  <img className="profile-photo" src={require("../../images/kyle.jpg")}/>
                    <a href="https://www.linkedin.com/in/kylecoberly/" className="name">Kyle Coberly</a>
                    <p className="title-location">Faculty Director | Denver, CO</p>
                    <p className="description">Teaching web development requires uniquely dedicated people. Our instructors have real world development experience along with proven teaching capabilities.</p>
                <Button color="primary">Instructor Profiles</Button>
              </Card>
              </Col>
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Career Services</CardTitle>
                    <img className="profile-photo" src={require("../../images/james.jpg")}/>
                      <a href="https://www.linkedin.com/in/namesjames/" className="name">James Conti</a>
                      <p className="title-location">Career Services Manager | Denver, CO</p>
                      <p className="description">We prepare students to leverage their new technical skills into a career as a full-stack developer. Cover letters, whiteboarding, networking...we're here.</p>
                <Button color="primary">Alumni Feedback</Button>
              </Card>
              </Col>
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Student Success</CardTitle>
                    <img className="profile-photo" src={require("../../images/kelly.jpg")}/>
                      <a href="https://www.linkedin.com/in/kellyannekawa/" className="name">Kelly Kawa</a>
                      <p className="title-location">Student Success Manager | Denver, CO</p>
                      <p className="description">From support counseling, to events, to snack supplies, We ensure your experience as a Galvanize student is everything you imagined it could be.</p>
                  <Button color="primary">Student Perks</Button>
              </Card>
              </Col>
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Entrepreneurs</CardTitle>
                <div className="company-logos">
                  <img className="company-logo" src={require("../../images/clickfox.jpg")}/>
                  <img className="company-logo" src={require("../../images/mozilla.png")}/>
                  <img className="company-logo" src={require("../../images/havenly.jpg")}/>
                  <img className="company-logo" src={require("../../images/pandora.png")}/>
                  <img className="company-logo" src={require("../../images/cybercar.png")}/>
                  <img className="company-logo" src={require("../../images/303magazine.png")}/>
                  <img className="company-logo" src={require("../../images/acumen.png")}/>
                  <img className="company-logo" src={require("../../images/cinearc.png")}/>
                  <img className="company-logo" src={require("../../images/pivotal.png")}/>
                  </div>
                  <p className="description">Learn and network surrounded by companies and entrepreneurs in an array of industries.</p>
                <Button color="primary">Tenant List</Button>
              </Card>
              </Col>
            </Row>
            </div>
        );
    }
}

export default OurTeam;
