import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Media, Card, CardFooter } from 'reactstrap';

import './alumni.css'

class Alumni extends React.Component {

    render() {
        return (
          <Col sm="12" md="12" lg='6' className="goal-block">
                <Card className="alumni-card">
                  <div className="image-holder">
                    <img src={this.props.item.photo.fields.file.url}/>
                  </div>
                  <div className="alumni-body">
                    <p className="title">{this.props.item.name}</p>
                    <p className="subtitle">{this.props.item.currentCompany} | Denver, CO</p>
                    <p className="subtitle">{this.props.item.cohort}</p>
                    <p className="story">{this.props.item.story}</p>
                  </div>
                </Card>
              </Col>


        );
    }
}



export default Alumni;
