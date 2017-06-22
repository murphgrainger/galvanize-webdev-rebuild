import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button, Card } from 'reactstrap';

import './timeline.css'

const curriculumContent = {
  standard: 'Our curriculum is built internally and consistently updated along with the quickly changing tech scene.  While each day is unique, the core of our program is morning lectures, followed by personalized learning time where students work through exercises at their own pace to master content objectives.',
  standup: 'At the beginning of each class day, the cohort circles into a "standup" to discuss overnight wins, blockers, discoveries, and events coming up.  Breakout topics for later are formed from these discussions.',
  warmup: 'The class solves algorithms.',
  lecture: 'The class sits through lectures',
  lunch: 'Play ping pong, bring your lunch, or try out one of the many new spots opening up in LoDo and the Highlands',
  lightening_talks: 'Practice public speaking.',
  personalized_learning: 'Work through exercises from concepts learned that morning. Work in groups, ask for help from an instructor, or choose to power through individually.',
  standdown: 'A bookend from the morning, standown is a quick close-out of the day where students circle-up to discuss wins, blockers, discoveries, and events.'
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
            <Col sm='12' className="lead-text-column curriculumn-text">
              <p className="lead">{this.state.curriculumText}</p>
            </Col>
            </div>
        );
    }
}

export default Timeline;
