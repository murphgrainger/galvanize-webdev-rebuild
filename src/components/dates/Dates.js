import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './dates.css'

import DateCard from './DateCard';


import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'


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

    render() {
        return (
          <div className="date-row">
            <Col sm='12' md='4'>
              <h4 className="label">Visit The Campus</h4>
            </Col>
            <Col sm='12' md='8'>
              <h4 className="label">Upcoming Dates</h4>
              {this.renderItems()}
            </Col>
          </div>
        );
    }
}

export default Dates;
