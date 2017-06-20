import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card, Media } from 'reactstrap';

import './goals.css'


class GoalCard extends React.Component {

    render() {
        return (
          <Col sm="12" md="6" className="goal-block">
            <Media>
            <Media left>
              <Media object src={this.props.item.icon.fields.file.url} className="goal-icon" />
            </Media>
            <Media body>
              <Media heading> {this.props.item.goal}</Media>
                {this.props.item.description}
                </Media>
              </Media>
            </Col>
        );
    }
}

export default GoalCard;
