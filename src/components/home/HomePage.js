import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import OurTeam from '../our-team/OurTeam';
import StudentLife from '../student-life/StudentLife';
import Stats from '../stats/Stats';
import Callout from '../callout/Callout';



import './home.css'

class HomePage extends React.Component {

  componentWillMount() {
    configureAnchors({offset: -60, scrollDuration: 200})
  }
    render() {
        return (
          <div>
            <div className='hero-section'>
              <Col sm='9' md='6' className="grid-cell">
                <div className='page-title'>
                  <h4>Web Development Immersive</h4>
                </div>
              <h1>Become a Web Developer</h1>
              <p>Our 24-week Web Development Immersive Program will transform you from a beginner coder into a job-ready web developer.</p>
              <p><Button color="primary">Start Your Application</Button></p>
              </Col>
            </div>
            <Stats/>
            <Callout />
            <ScrollableAnchor key="ourteam" id="ourteam" >
                <OurTeam />
            </ScrollableAnchor>
            <ScrollableAnchor key="studentlife" id="studentlife" >
              <StudentLife />
            </ScrollableAnchor>
            </div>
        );
    }
}


export default HomePage;
