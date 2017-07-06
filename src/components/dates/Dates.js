import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';
import ReactGA from 'react-ga';

import './dates.css'

import DateCard from './DateCard';
import ParallaxHeader from '../parallax/ParallaxHeader';


import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

const applyImage = require(`../../images/mac.jpg`)

class Dates extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    items: [],
  };

  this.initClient = this.initClient.bind(this);
}

initClient (spaceId, deliveryAccessToken) {
  let client
  let authorized
  client = createClient({
    space: spaceId,
    accessToken: deliveryAccessToken,
    host: 'cdn.contentful.com'
  })
  return client.getEntries({
    content_type: 'date',
    order: 'sys.createdAt'

  })
    .then((res) => {
      authorized = true
      this.setState({ items: [...this.state.items, ...res.items] });
      return res.items
    })
    .catch(err => {console.log(err)})
}

componentWillMount() {
  this.initClient(spaceId, deliveryAccessToken)
}

renderItems() {
  return this.state.items.map(item => (
    <DateCard
      key={item.sys.id}
      item={item.fields}
      {...this.props}
    />
  ));
}

gaEvent(label) {
  ReactGA.event({
    category: 'Info Session',
    action: ' Click',
    label: label
  })
}

    render() {
        return (
          <div>
            <ParallaxHeader title="Apply" background={applyImage}/>
          <div className="date-row">
            <Col sm='12' md='5' lg="4" className="campus-col">
              <h4 className="label">Visit The Campus</h4>
              <div className="campus-block">
                <div className="campus platte">
                  <h3>Platte</h3>
                  <h4 className="campus-address">1644 Platte Street</h4>
                  <h4 className="campus-address">Denver, CO 80202</h4>
                  <Button className="info-button" onClick={(e) => {this.gaEvent('Info Session Button')}}>Register for Info Session</Button>
                </div>
                <div className="campus golden">
                  <h3>Golden Triangle</h3>
                  <h4 className="campus-address">1062 Delaware Street</h4>
                  <h4 className="campus-address">Denver, CO 80204</h4>
                  <Button className="info-button" onClick={(e) => {this.gaEvent('Info Session Button')}} onClick={(e) => {this.gaEvent('Instructor Profiles Button')}}>Register for Info Session</Button>
                </div>
              </div>
            </Col>
            <Col sm='12' md='7' lg='8'>
              <h4 className="label">Upcoming Dates</h4>
              {this.renderItems()}
            </Col>
          </div>
          </div>
        );
    }
}

export default Dates;
