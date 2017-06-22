import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import { createClient } from 'contentful'
import { deliveryAccessToken, graduateTypeId, spaceId } from '../../config'

import './timeline.css'

const curriculumContent = {
  standard: 'Our curriculum is built internally and consistently updated along with the quickly changing tech scene.  While each day is unique, the core of our program is morning lectures, followed by personalized learning time where students work through exercises at their own pace to master content objectives.',
  standup: 'At the beginning of each class day, the cohort circles into a "standup" to discuss overnight wins, blockers, discoveries, and events coming up.  Breakout topics for later are formed from these discussions.',
  warmup: 'Warmup ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  lecture: 'Lecture ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  lunch: 'Lunch ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  lightening_talks: 'Lightening ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  personalized_learning: 'Work through exercises from concepts learned that morning. Work in groups, ask for help from an instructor, or choose to power through individually.',
  standdown: 'A bookend from the morning, standown is a quick close-out of the day where students circle-up to discuss wins, blockers, discoveries, and events.'
}

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
      curriculumText: curriculumContent.standard,
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
        return res.items
      })
      .catch(err => {console.log(err)})
  }

  componentWillMount() {
    this.initClient(spaceId, deliveryAccessToken)
  }

    render() {
        return (
          <div>
          <div className="timeline-outer">
              <div className="schedule standup" onMouseEnter={() => this.hoverText('Stand Up')} onMouseLeave={() => this.hoverText('Standard')}>Stand Up</div>
              <div className="schedule warmup" onMouseEnter={() => this.hoverText('Warmup')} onMouseLeave={() => this.hoverText('Standard')}>Warmup</div>
              <div className="schedule lectures" onMouseEnter={() => this.hoverText('Lecture')} onMouseLeave={() => this.hoverText('Standard')}>Lectures</div>
              <div className="schedule lunch" onMouseEnter={() => this.hoverText('Lunch')} onMouseLeave={() => this.hoverText('Standard')}>Lunch</div>
              <div className="schedule lightening" onMouseEnter={() => this.hoverText('Lightening Talks')} onMouseLeave={() => this.hoverText('Standard')}>Lightening Talks</div>
              <div className="schedule personalized" onMouseEnter={() => this.hoverText('Personalized Learning')} onMouseLeave={() => this.hoverText('Standard')}>Personalized Learning</div>
              <div className="schedule standdown" onMouseEnter={() => this.hoverText('Stand Down')} onMouseLeave={() => this.hoverText('Standard')}>Stand Down</div>
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
    case 'Lightening Talks':
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
