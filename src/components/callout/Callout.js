import React from 'react';
import { Link } from 'react-router';
import { Col } from 'reactstrap';

import './callout.css'

class Callout extends React.Component {
    render() {
        return (
          <div className="callout-banner">
            <p className="callout-text" >We also offer &nbsp;
              <a href="#" className="callout-text-a">scholarships and financing</a> options.</p>
            </div>
        );
    }
}


export default Callout;
