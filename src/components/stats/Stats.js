import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './stats.css'

class Stats extends React.Component {
    render() {
        return (
          <div className="stat-row">
            <Col sm="12" md="4" className="review-block">
              <h4 className="label">Reviews</h4>
              <img src="//images.contentful.com/hu62i9v1xxtm/64MpF7k6QgqAeWc0UyGG8K/0f47727de49db05a4679b92345dd94b9/galvanize-starts_4-5.svg?q=80"/>
            <em><p>Based on reviews from <a href="https://www.coursereport.com/schools/galvanize" target="_blank" data-reactid="141">CourseReport</a></p></em>
            </Col>
            <Col sm="12" md="4" className="stat-block">
              <h4 className="label">Length</h4>
              <h2 className='stat'>24 Weeks</h2>
            </Col>
            <Col sm="12" md="4" className="cost-block">
              <h4 className="label">Cost</h4>
              <h2 className='stat'>$21,000</h2>
            </Col>
            </div>
        );
    }
}

export default Stats;
