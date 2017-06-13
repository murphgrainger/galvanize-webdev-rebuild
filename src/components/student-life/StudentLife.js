import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './student-life.css'

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
              <p className="lead">Galvanize campuses are designed from the ground up to be conducive to learning to code. From the classrooms and the lab space to the carefully vetted companies renting workspaces, Galvanize is the learning community for technology.</p>
            </Col>
            </div>
        );
    }
}

export default StudentLife;
