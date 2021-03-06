import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './curriculum.css'

import TechIcon from './TechIcon';
import CapstoneCard from './CapstoneCard';


class CurriculumCard extends React.Component {

  componentDidMount() {
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

      if (this.props.item.hasOwnProperty('module')) {
        return (
          <Col sm="12" md="6" className="curriculum-block">
            <Card className="curriculum-card">
              <img src={this.props.item.icon.fields.file.url} className="curriculum-icon" />
              <h4 className="label">Module {this.props.item.module}</h4>
              <h3 className="title">{this.props.item.title}</h3>
              <p className="description">{this.props.item.description}</p>
              <div className="tech-logos">
              {this.renderItems()}
              </div>
            </Card>
            </Col>
        );
      } else {
        return (
          <CapstoneCard item={this.props} />
        )
      }

    }
}

export default CurriculumCard;
