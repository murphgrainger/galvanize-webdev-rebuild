import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';
import ReactGA from 'react-ga';

import './curriculum.css'


class CapstoneCard extends React.Component {

  gaEvent(label) {
    ReactGA.event({
      category: 'Curriculum',
      action: ' Click',
      label: label
    })
  }

    render() {
        return (
          <Col sm="12" className="curriculum-block">
            <Card className="curriculum-card capstone-card">
              <img src={this.props.item.item.icon.fields.file.url} className="curriculum-icon" />
              <h3 className="title">{this.props.item.item.title}</h3>
              <p className="description">{this.props.item.item.description}</p>
              <Button color="secondary" onClick={(e) => {this.gaEvent('Capstone Projects Button')}}>Student Examples</Button>
            </Card>
            </Col>
        );
    }
}

export default CapstoneCard;
