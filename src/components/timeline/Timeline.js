import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';
import ReactGA from 'react-ga';

import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

import './timeline.css'

let lineStyle = {
  marginLeft: '2.5%'
}

let horizStyle = {
  display: 'none',
  borderLeft: '2px solid #353535',
  marginLeft: '2.5%'
}

let vertStyle = {
  display: 'none',
  borderTop: '2px solid #353535',
  marginLeft: '2.5%'
}

class Timeline extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.hoverText = this.hoverText.bind(this);
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
      content_type: 'schedule',
    })
      .then((res) => {
        authorized = true
        this.setState({ items: [...this.state.items, ...res.items] });
        console.log(res.items);

        return res.items
      })
      .catch(err => {console.log(err)})
      .then(() => {

        this.setState({
          curriculumText: this.state.items[5].fields.description,

        })      })
  }

  componentWillMount() {
    this.initClient(spaceId, deliveryAccessToken)

  }

  gaEvent(label) {
    ReactGA.event({
      category: 'Daily Plan',
      action: ' Hover',
      label: label
    })
  }

    render() {
        return (
          <div>
          <div className="timeline-outer">
              <div className="schedule standup" onMouseEnter={() => {this.hoverText('Stand Up'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Stand Up</div>
              <div className="schedule warmup" onMouseEnter={() => {this.hoverText('Warmup'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Warmup</div>
              <div className="schedule lectures" onMouseEnter={() => {this.hoverText('Lecture'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Lectures</div>
              <div className="schedule lunch" onMouseEnter={() => {this.hoverText('Lunch'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Lunch</div>
              <div className="schedule lightening" onMouseEnter={() => {this.hoverText('Lightning Talks'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Lightning Talks</div>
              <div className="schedule personalized" onMouseEnter={() => {this.hoverText('Personalized Learning'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Personalized Learning</div>
              <div className="schedule standdown" onMouseEnter={() => {this.hoverText('Stand Down'); this.gaEvent('Stand Up Section')}} onMouseLeave={() => this.hoverText('Standard')}>Stand Down</div>
          </div>
          <div className="lines" style={lineStyle}>
            <div className="vertical-line" style={horizStyle} ></div>
            <div className="horizontal-line"style={vertStyle} ></div>
          </div>
          <Col sm='12' className="lead-text-column curriculumn-text">
            <p className="lead">{this.state.curriculumText}</p>
          </Col>
          </div>
        );
    }

    hoverText(text) {
      let schedule = this.state.items.filter(item => {
      return item.fields.title === text
      })
        this.setState({
          curriculumText: schedule[0].fields.description
        })

        switch (text) {
          case 'Standard':
            horizStyle = {
              display: 'none',
              borderLeft: '2px solid #353535',
              marginLeft: '2.5%'
            }
            vertStyle = {
              display: 'none',
              borderTop: '2px solid #353535',
              marginLeft: '2.5%'
            }
            break;
        case 'Stand Up':
          horizStyle = {
            display: 'block',
            borderLeft: '2px solid #353535',
            transition: 'opacity 2s ease-in'
          }
          vertStyle = {
            display: 'block',
            borderTop: '2px solid #353535',
          }

          lineStyle = {
            marginLeft: '3%'
          }
          break;
        case 'Warmup':
          horizStyle = {
            display: 'block',
            borderLeft: '2px solid #cecece',
          }
          vertStyle = {
            display: 'block',
            borderTop: '2px solid #cecece',
            width: '73%'
          }

          lineStyle = {
            marginLeft: '10%'
          }
          break;
        case 'Lecture':
          horizStyle = {
            display: 'block',
            borderLeft: '2px solid #0095a3',
          }
          vertStyle = {
            display: 'block',
            borderTop: '2px solid #0095a3',
            width: '65%'
          }

          lineStyle = {
            marginLeft: '18%'
          }
          break;
      case 'Lunch':
        horizStyle = {
          display: 'block',
          borderLeft: '2px solid #353535',
          marginLeft: '31%'
        }
        vertStyle = {
          display: 'block',
          borderTop: '2px solid #353535',
          width: '65%'
        }

        lineStyle = {
          marginLeft: '18%',
        }
        break;
    case 'Lightning Talks':
      horizStyle = {
        display: 'block',
        borderLeft: '2px solid #cecece',
        marginLeft: '41%'
      }
      vertStyle = {
        display: 'block',
        borderTop: '2px solid #cecece',
        width: '65%'
      }

      lineStyle = {
        marginLeft: '18%',
      }
      break;
    case 'Personalized Learning':
      horizStyle = {
        display: 'block',
        borderLeft: '2px solid #0095a3',
      }
      vertStyle = {
        display: 'block',
        borderTop: '2px solid #0095a3',
        width: '65%'
      }

      lineStyle = {
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '18%'
      }
      break;
    case 'Stand Down':
      horizStyle = {
        display: 'block',
        borderLeft: '2px solid #353535',
      }
      vertStyle = {
        display: 'block',
        borderTop: '2px solid #353535',
        width: '78%'
      }

      lineStyle = {
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '18%'

      }
      break;

          default:
      }
    }
}

export default Timeline;
