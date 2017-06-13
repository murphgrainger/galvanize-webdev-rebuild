import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './timeline.css'

class Timeline extends React.Component {
    render() {
        return (
          <div className="timeline-outer">
              <div className="schedule standup">Stand Up</div>
              <div className="schedule warmup">Warmup</div>
              <div className="schedule lectures">Lectures</div>
              <div className="schedule lunch">Lunch</div>
              <div className="schedule lightening">Lightening Talks</div>
              <div className="schedule personalized">Personalized Learning</div>
              <div className="schedule standdown">Stand Down</div>
            </div>
        );
    }
}

export default Timeline;
