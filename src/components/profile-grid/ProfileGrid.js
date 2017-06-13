import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './profile-grid.css'

class ProfileGrid extends React.Component {
    render() {
        return (
          <div>
            <div className="outer-container">
              <h4 className="our-team-headline">Our Team</h4>
            </div>
          </div>
        );
    }
}

export default ProfileGrid;
