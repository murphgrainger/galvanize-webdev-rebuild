import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './curriculum.css'


class TechIcon extends React.Component {

  componentDidMount() {
    console.log(this.props.logo);
  }

    render() {
        return (
          <div>
            <img className="tech-logo" src={this.props.logo.file.url}/>
          </div>
        );
    }
}

export default TechIcon;
