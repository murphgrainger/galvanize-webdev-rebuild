import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './curriculum.css'

import TechIcon from './TechIcon';



class CurriculumCard extends React.Component {

  componentDidMount() {
    console.log('props', this.props.item.techLogo);
  }

  renderItems() {
    return this.props.item.techLogo.map(logo => (
      <TechIcon
        key={logo.sys.id}
        logo={logo.fields}
        {...this.props}
      />
    ));
  }

    render() {
        return (
          <Col sm="12" md="6" className="curriculum-block">
            <Card className="curriculum-card">
              <img src={this.props.item.icon.fields.file.url} className="curriculum-icon" />
              <h5>Module {this.props.item.module}</h5>
              <h3>{this.props.item.title}</h3>
              <p>{this.props.item.description}</p>
              <div className="tech-logos">
              {this.renderItems()}
              </div>
            </Card>
            </Col>
        );
    }
}

export default CurriculumCard;
