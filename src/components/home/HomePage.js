import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import OurTeam from '../our-team/OurTeam';
import StudentLife from '../student-life/StudentLife';
import Stats from '../stats/Stats';
import Callout from '../callout/Callout';
import Alumni from '../alumni/Alumni';
import Dates from '../dates/Dates';


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
            <div className='section'>
              <div className='section-headline'>
                <h2 className='headline'>The Galvanize Advantage</h2>
                  <Col sm='12' className="lead-text-column">
                    <p className="lead">Galvanize campuses are designed from the ground up to be conducive to learning to code. From the classrooms and the lab space to the carefully vetted companies renting workspaces: <br></br><span>Galvanize is the learning community for technology.</span></p>
                  </Col>
              </div>
              </div>

              <ScrollableAnchor key="studentlife" id="studentlife" >
                <StudentLife />
              </ScrollableAnchor>
            <ScrollableAnchor key="ourteam" id="ourteam" >
                <OurTeam />
            </ScrollableAnchor>
            <ScrollableAnchor key="dates" id="dates" >
              <Dates />
            </ScrollableAnchor>
            <ScrollableAnchor key="graduates" id="graduates" >
              <Alumni />
            </ScrollableAnchor>
            </div>
        );
    }
}


export default HomePage;
