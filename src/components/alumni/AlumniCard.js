import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Media, Card, CardFooter } from 'reactstrap';
import ReactGA from 'react-ga';

import './alumni.css'

class Alumni extends React.Component {

    render() {
        return (
          <Col xs="12" sm="12" md="12" lg='6' className="goal-block">
                <Card className="alumni-card">
                  <div className="image-holder">
                    <img src={this.props.item.photo.fields.file.url}/>
                  </div>
                  <div className="alumni-body">
                    <p className="title">{this.props.item.name}</p>
                    <p className="subtitle">{this.props.item.currentCompany} | Denver, CO</p>
                    <p className="subtitle">{this.props.item.cohort}</p>
                    <p className="story">{this.props.item.story}</p>
                    <div>
                    <ReactGA.OutboundLink
                      className="contact-me-button"
                      eventLabel="alumni-contact"
                      to={'mailto:' + this.props.item.email}>
                      <Button className="contact-me-button">Contact Me</Button>
                      </ReactGA.OutboundLink>
                    <ReactGA.OutboundLink
                        className="contact-me-button"
                        eventLabel="alumni-github"
                        to={this.props.item.github}
                        target="_blank">
                        <Button className="contact-me-button">See My Projects</Button>
                     </ReactGA.OutboundLink>
                    </div>
                  </div>
                </Card>
              </Col>


        );
    }
}



export default Alumni;
