import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './student-life.css'
import Timeline from './../timeline/Timeline'

class StudentLife extends React.Component {
    render() {
        return (
          <div>
            <div className="student-life-container">
              <div className='section-headline'>
                <h2 className='headline-parallax'>Student Life</h2>
              </div>
            </div>
            <Col sm='12' className="lead-text-column">
              <p className="lead">Our curriculum is built internally and consistently updated along with the quickly changing tech scene.  While each day is unique, the core of our program is morning lectures, followed by personalized learning time where students work through exercises at their own pace to master content objectives.</p>
            </Col>
            <Col sm='12' className="timeline-col">
              <Row className="callout-header">
                <h3 className="callout">
                  <img className="arrow" src={require("../../images/arrow.png")}/> &nbsp;Daily Plan</h3>
              </Row>
              <Timeline/>
            </Col>
            </div>
        );
    }
}

export default StudentLife;
