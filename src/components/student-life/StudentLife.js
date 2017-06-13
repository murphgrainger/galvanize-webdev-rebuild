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
            <Col sm='12' className="timeline-col">
              <Timeline/>
            </Col>
            </div>
        );
    }
}

export default StudentLife;
