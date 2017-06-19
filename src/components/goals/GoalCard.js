import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './goals.css'


class GoalCard extends React.Component {

  componentDidMount() {
    console.log('props', this.props.item);
  }

    render() {
        return (
          <Col sm="12" md="6" className="goal-block">
              <h4 className="label">{this.props.item.goal}</h4>
              <p>{this.props.item.description}</p>
            </Col>
        );
    }
}

export default GoalCard;
