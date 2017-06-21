import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Media, Card, CardFooter } from 'reactstrap';

import './alumni.css'

class Alumni extends React.Component {

    render() {
        return (
            <Col sm="12" md="12" lg='6' className="goal-block">
              <Card>
              <Media>
              <Media left>
                <Media object src={this.props.item.photo.fields.file.url} className="alumni-photo" />
              </Media>
              <Media body className="alumni-body">
                <Media heading> {this.props.item.name}</Media>
                  <p className="subtitle">{this.props.item.currentCompany} | Denver, CO</p>
                  <p className="subtitle">{this.props.item.cohort}</p>
                  <p className="story">{this.props.item.story}</p>
                  </Media>
                </Media>
                <CardFooter className="alumni-footer"><a className="contact-me-button" href={'mailto:' + this.props.item.email}><Button color="primary">Contact Me</Button></a>
                <a className="contact-me-button" target='_blank' href={this.props.item.github}><Button color="primary">See My Projects</Button></a></CardFooter>
                </Card>
              </Col>
        );
    }
}



export default Alumni;
