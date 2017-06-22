import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

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
      curriculumText: curriculumContent.standard
    };

    this.hoverText = this.hoverText.bind(this);

  }

  hoverText(text) {
      this.setState({
        curriculumText: curriculumContent[text]
      })

      switch (text) {
        case 'standard':
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
      case 'standup':
        horizStyle = {
          display: 'block',
          borderLeft: '2px solid #353535',
        }
        vertStyle = {
          display: 'block',
          borderTop: '2px solid #353535',
        }

        lineStyle = {
          marginLeft: '3%'
        }
        break;
      case 'warmup':
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
      case 'lecture':
        horizStyle = {
          display: 'block',
          borderLeft: '2px solid #0095a3',
        }
        vertStyle = {
          display: 'block',
          borderTop: '2px solid #0095a3',
          width: '63%'
        }

        lineStyle = {
          marginLeft: '20%'
        }
        break;
    case 'lunch':
      horizStyle = {
        display: 'block',
        borderLeft: '2px solid #353535',
        marginLeft: '29%'
      }
      vertStyle = {
        display: 'block',
        borderTop: '2px solid #353535',
        width: '63%'
      }

      lineStyle = {
        marginLeft: '20%',
      }
      break;
  case 'lightening_talks':
    horizStyle = {
      display: 'block',
      borderLeft: '2px solid #cecece',
      marginLeft: '39%'
    }
    vertStyle = {
      display: 'block',
      borderTop: '2px solid #cecece',
      width: '63%'
    }

    lineStyle = {
      marginLeft: '20%',
    }
    break;
  case 'personalized_learning':
    horizStyle = {
      display: 'block',
      borderLeft: '2px solid #0095a3',
    }
    vertStyle = {
      display: 'block',
      borderTop: '2px solid #0095a3',
      width: '63%'
    }

    lineStyle = {
      display:'flex',
      flexDirection:'row-reverse',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginLeft: '20%'
    }
    break;
  case 'standdown':
    horizStyle = {
      display: 'block',
      borderLeft: '2px solid #353535',
    }
    vertStyle = {
      display: 'block',
      borderTop: '2px solid #353535',
      width: '76.65%'
    }

    lineStyle = {
      display:'flex',
      flexDirection:'row-reverse',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginLeft: '40%'

    }
    break;

        default:
    }
  }

    render() {
        return (
          <div>
          <div className="timeline-outer">
              <div className="schedule standup" onMouseEnter={() => this.hoverText('standup')} onMouseLeave={() => this.hoverText('standard')}>Stand Up</div>
              <div className="schedule warmup" onMouseEnter={() => this.hoverText('warmup')} onMouseLeave={() => this.hoverText('standard')}>Warmup</div>
              <div className="schedule lectures" onMouseEnter={() => this.hoverText('lecture')} onMouseLeave={() => this.hoverText('standard')}>Lectures</div>
              <div className="schedule lunch" onMouseEnter={() => this.hoverText('lunch')} onMouseLeave={() => this.hoverText('standard')}>Lunch</div>
              <div className="schedule lightening" onMouseEnter={() => this.hoverText('lightening_talks')} onMouseLeave={() => this.hoverText('standard')}>Lightening Talks</div>
              <div className="schedule personalized" onMouseEnter={() => this.hoverText('personalized_learning')} onMouseLeave={() => this.hoverText('standard')}>Personalized Learning</div>
              <div className="schedule standdown" onMouseEnter={() => this.hoverText('standdown')} onMouseLeave={() => this.hoverText('standard')}>Stand Down</div>
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
}

export default Timeline;
