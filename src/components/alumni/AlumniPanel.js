import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

import './alumni.css'

class Alumni extends React.Component {

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
      console.log(res.items);
      authorized = true
      return res.items
    })
}

componentDidMount() {
  console.log('hello!');
  this.initClient(spaceId, deliveryAccessToken)
}

    render() {
        return (
          <div>
            <div className='section-headline'>
              <h2 className='headline'>Recent Alumni</h2>
            </div>
        </div>
        );
    }
}

export default Alumni;
