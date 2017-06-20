import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './goals.css'

import GoalCard from './GoalCard';


import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'


class Goals extends React.Component {

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
    content_type: 'goal',
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
    <GoalCard
      key={item.sys.id}
      item={item.fields}
      {...this.props}
    />
  ));
}

    render() {
        return (
          <div className="goal-holder">
            {this.renderItems()}
          </div>
        );
    }
}

export default Goals;
