import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './parallax.css'

class ParallaxHeader extends React.Component {

  componentDidMount(){
    console.log(this.props.background);



  }
    render() {
        return (
          <div>
            <div className="outer-container" style={{backgroundImage: `url(${this.props.background})`}}>
              <h4 className="headline-parallax">{this.props.title}</h4>
            </div>
          </div>
        );
    }
}

export default ParallaxHeader;
