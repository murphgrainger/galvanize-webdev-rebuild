import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';


import './home.css'

class HomePage extends React.Component {
    render() {
        return (
          <div>
            <div className='hero-section'>
              <Col sm='8' md='6' className="grid-cell">
              <h2>Web Development Immersive</h2>
              <h1>Become a Web Developer</h1>
              <p>Our 24-week Web Development Immersive Program will transform you from a beginner coder into a job-ready full-stack web developer.</p>
              <p><Button color="primary">Start Your Application</Button></p>
              </Col>
            </div>

            </div>
        );
    }
}

export default HomePage;
