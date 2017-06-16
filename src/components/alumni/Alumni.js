import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './alumni.css'

import ParallaxHeader from '../parallax/ParallaxHeader';
import AlumniCompanies from './AlumniCompanies';
import AlumniPanel from './AlumniPanel';



const alumniImage = require(`../../images/g38.jpg`)


class Alumni extends React.Component {
    render() {
        return (
          <div>
            <ParallaxHeader title="Our Graduates" background={alumniImage}/>
            <div className="stat-row">
              <Col sm="12" md="4" className="review-block">
                <h4 className="label">Number of Graduates</h4>
                  <h2 className='stat'>650+</h2>
              </Col>
              <Col sm="12" md="4" className="stat-block">
                <h4 className="label">Placement Rate</h4>
                <h2 className='stat'>91%</h2>
              </Col>
              <Col sm="12" md="4" className="cost-block">
                <h4 className="label">Average Starting Salary</h4>
                <h2 className='stat'>$76,838</h2>
              </Col>
            </div>
            <AlumniCompanies />
            <AlumniPanel />
          </div>
        );
    }
}

export default Alumni;
