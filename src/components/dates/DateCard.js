import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card, CardTitle, CardSubtitle } from 'reactstrap';

import './dates.css'


class GoalCard extends React.Component {

  componentWillMount() {
    console.log(this.props.item);
  }

    render() {
        return (
          <Card className="date-card">
            <Col xs="12" sm="12" md="8">
            <h1>{this.props.item.startMonth} <span className="day">{this.props.item.startDate}</span> - {this.props.item.endMonth} <span className="day">{this.props.item.endDate}</span></h1>
            <p className="date-info"><span className="campus-name">{this.props.item.campus}</span> | Mon-Fri: 9am-5pm</p>
            </Col>
            <Col xs="12" sm='12' md="4">
              <Button color="primary">Start Application</Button>
            </Col>
            </Card>
        );
    }
}

export default GoalCard;
