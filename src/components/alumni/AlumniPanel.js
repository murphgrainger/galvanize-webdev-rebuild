import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

import AlumniCard from './AlumniCard';

import './alumni.css'

class Alumni extends React.Component {
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
  return client.getEntries()
    .then((res) => {
      authorized = true
      this.setState({ items: [...this.state.items, ...res.items] });
      console.log(res.items);
      return res.items
    })
}

componentWillMount() {
  console.log('hello!');
  this.initClient(spaceId, deliveryAccessToken)
}

renderItems() {
  console.log(this.state.items);
  return this.state.items.map(item => (
    <AlumniCard
      key={item.sys.id}
      item={item.fields}
      {...this.props}
    />
  ));
}

    render() {
        return (
          <div>
            <div className='section-headline'>
              <h2 className='headline'>Recent Alumni</h2>
            </div>
            <div className="alumni-card-holder">
            {this.renderItems()}
          </div>
        </div>
        );
    }
}

export default Alumni;