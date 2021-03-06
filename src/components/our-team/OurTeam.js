import React from 'react';
import {Link} from 'react-router';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import ReactGA from 'react-ga';

import ParallaxHeader from '../parallax/ParallaxHeader';

import './our-team.css'

const ourTeamImage = require(`../../images/photo-grid.jpg`);

class OurTeam extends React.Component {

  gaEvent(label) {
    ReactGA.event({
      category: 'Our Team',
      action: ' Click',
      label: label
    })
  }

    render() {
        return (
          <div>
            <ParallaxHeader title="Our Team" background={ourTeamImage}/>
            <Row className="card-row">
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Instructors</CardTitle>
                  <img className="profile-photo" src={require("../../images/kyle.jpg")}/>
                      <ReactGA.OutboundLink
                      className="name"
                       eventLabel="linkedIn"
                       to="https://www.linkedin.com/in/kylecoberly/"
                       target="_blank">
                      Kyle Coberly
                     </ReactGA.OutboundLink>
                    <p className="title-location">Faculty Director | Denver, CO</p>
                    <p className="description">Teaching web development requires uniquely dedicated people. Our instructors have real world development experience along with proven teaching capabilities.</p>
                <Button color="primary" onClick={(e) => {this.gaEvent('Instructor Profiles Button')}}>Instructor Profiles</Button>
              </Card>
              </Col>
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Career Services</CardTitle>
                    <img className="profile-photo" src={require("../../images/james.jpg")}/>
                      <ReactGA.OutboundLink
                        className="name"
                        eventLabel="linkedIn"
                        to="https://www.linkedin.com/in/namesjames/"
                        target="_blank">
                        James Conti
                     </ReactGA.OutboundLink>
                      <p className="title-location">Career Services Manager | Denver, CO</p>
                      <p className="description">We prepare students to leverage their new technical skills into a career as a full-stack developer. Cover letters, whiteboarding, networking...we're here.</p>
                <Button color="primary" onClick={(e) => {this.gaEvent('Alumni Feedback Button')}}>Alumni Feedback</Button>
              </Card>
              </Col>
              <Col className="card-col" xs="12" sm="6" md="6" lg="3">
              <Card block className="text-center">
                <CardTitle>Student Success</CardTitle>
                    <img className="profile-photo" src={require("../../images/kelly.jpg")}/>
                        <ReactGA.OutboundLink
                          className="name"
                          eventLabel="linkedIn"
                          to="https://www.linkedin.com/in/kellyannekawa/"
                          target="_blank">
                          Kelly Kawa
                       </ReactGA.OutboundLink>
                      <p className="title-location">Student Success Manager | Denver, CO</p>
                      <p className="description">From support counseling, to events, to snack supplies, we ensure your experience as a Galvanize student is everything you imagined it could be.</p>
                  <Button color="primary" onClick={(e) => {this.gaEvent('Student Perks Button')}}>Student Perks</Button>
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
                <Button color="primary" onClick={(e) => {this.gaEvent('Tenant List Button')}}>Tenant List</Button>
              </Card>
              </Col>
            </Row>
            </div>
        );
    }
}

export default OurTeam;
