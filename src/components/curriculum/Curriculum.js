import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './curriculum.css'

import CurriculumCard from './CurriculumCard';


import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

class Curriculum extends Component {

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
      content_type: 'curriculum',
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
      <CurriculumCard
        key={item.sys.id}
        item={item.fields}
        {...this.props}
      />
    ));
  }

    render() {
        return (
          <div className="curriculum-section">
            <div className='section-headline'>
              <h2 className='headline'>What You Will Learn</h2>
            </div>
            <div className="module-holder">
              {this.renderItems()}
             </div>
          </div>
        );
    }
}

export default Curriculum;
