import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card, CardTitle } from 'reactstrap';

import './alumni.css'

class Alumni extends React.Component {

  componentDidMount() {
    console.log('props', this.props.item.photo.fields.file.url);
  }

    render() {
        return (
            <Col className="card-col" xs="12" sm="6" md="6" lg="3">
            <Card block className="text-center">
              <img className="profile-photo" src={this.props.item.photo.fields.file.url}/>
                    <a href="https://www.linkedin.com/in/namesjames/" className="name">{this.props.item.name}</a>
                    <p className="title-location">{this.props.item.currentCompany} | Denver, CO</p>
              <Button color="primary">Contact Me</Button>
            </Card>
            </Col>
        );
    }
}



export default Alumni;
