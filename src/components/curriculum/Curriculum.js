import React from 'react';
import { Link } from 'react-router';
import { Col, Row, Button } from 'reactstrap';

import './curriculum.css'

class Curriculum extends React.Component {
    render() {
        return (
          <div className="curriculum-section">
            <div className='section-headline'>
              <h2 className='headline'>What You Will Learn</h2>
            </div>
                <div className="curriculum-block">
                  <div className="curriculum-block-container">
                    <Col xs='12' sm='12' md='3' className="icon-col"><img className="curriculum-icon" src="//images.contentful.com/hu62i9v1xxtm/5paSdLO0hySM0Icgwy4s4o/92fc65c470e09d55080c4118754779e0/icon_intro-to-programming-and-frontend-dev.png?q=80"/></Col>
                    <Col xs='12' sm='12' md='9' className="curriculum-content">
                      <h4 className="label">Module 1</h4>
                      <h3 className="title">Intro to Programming and Frontend Development</h3>
                      <p>You&#39;ll learn the fundamentals of JavaScript as well as programming fundamentals and basic algorithms. You&#39;ll learn to build web pages with HTML and style them with CSS, and you&#39;ll make web pages interactive with DOM
                        manipulation and AJAX. You&#39;ll leave this module having built your own client-side app using an agile workflow.
                      </p>
                    <img className="tech-logo"src={require("../../images/html.png")}/>
                    <img className="tech-logo" src={require("../../images/css.png")}/>
                    <img className="tech-logo" src={require("../../images/javascript.png")}/>
                    <img className="tech-logo" src={require("../../images/ajax.png")}/>
                    <img className="tech-logo" src={require("../../images/jquery.png")}/>
                    <img className="tech-logo" src={require("../../images/bootstrap.jpg")}/>
                    <img className="tech-logo" src={require("../../images/materialize.png")}/>
                    </Col>
                  </div><hr/></div>
                <div className="curriculum-block">
                  <div className="curriculum-block-container">
                    <Col xs='12' sm='12' md='3' className="icon-col"><img className="curriculum-icon" src="//images.contentful.com/hu62i9v1xxtm/61b4OPlwxaAQqmMekEkK0A/8c1c902032ae32c29a1793dbdbf5ac8c/icon_server-side-programming.png?q=80"/></Col>
                    <Col xs='12' sm='12' md='9' className="curriculum-content">
                      <h4 className="label">Module 2</h4>
                      <h3 className="title">Server-Side Programming</h3>
                      <p>Learn how to build and deploy dynamic server-side web apps using Node.js and Express as well as how to manageL. You&#39;ll finish this module by completing a server-side application using an agile workflow
                        with a team of classmates.
                      </p>
                      <img className="tech-logo" src={require("../../images/node.png")}/>
                      <img className="tech-logo" src={require("../../images/express.png")}/>
                      <img className="tech-logo" src={require("../../images/postgres.png")}/>
                      <img className="tech-logo" src={require("../../images/npm.png")}/>
                    </Col>
                  </div><hr/></div>
                <div className="curriculum-block">
                  <div className="curriculum-block-container">
                    <Col xs='12' sm='12' md='3' className="icon-col"><img className="curriculum-icon" src="//images.contentful.com/hu62i9v1xxtm/4cyrUuW1Xy4acW0EI0ygsu/b2a1177cfc459dd99199d0f8b9c940f0/icon_single-page-applications.png?q=80"/></Col>
                    <Col xs='12' sm='12' md='9' className="curriculum-content">
                      <h4 className="label">Module 3</h4>
                      <h3 className="title">Single-Page Applications</h3>
                      <p>In this module you&#39;ll combine what you learned in the front-end and server-side modules and build on that foundation by learning client-side frameworks such as AngularJS and React. You&#39;ll finish by building a complete
                        single-page application (both client-side and server-side) in a group, following an agile workflow.
                      </p>
                    <a href="https://angularjs.org/" target="_blank"><img className="tech-logo"src={require("../../images/angular.png")}/></a>
                    <a href="https://facebook.github.io/react/" target="_blank">  <img className="tech-logo" src={require("../../images/react.png")}/></a>
                    <a href="https://www.emberjs.com/" target="_blank">  <img className="tech-logo" src={require("../../images/ember.png")}/></a>
                    </Col>
                  </div><hr/></div>
                <div className="curriculum-block">
                  <div className="curriculum-block-container">
                    <Col xs='12' sm='12' md='3' className="icon-col"><img className="curriculum-icon" src='https://images.contentful.com/hu62i9v1xxtm/68jdUDM1NuGOGi2i8wg2Og/c828e49ab8fa4a3e7d37592d929148e8/icon_data-structures-and-algorithms.png%3Fq=80'/></Col>
                    <Col xs='12' sm='12' md='9' className="curriculum-content">
                      <h4 className="label">Module 4</h4>
                      <h3 className="title">Data Structures and Algorithms &amp; Interview Prep</h3>
                      <p>You&#39;ll learn how to tackle more complex algorithms that such as sorting algorithms, searching algorithms and tree and graph traversal. You&#39;ll also learn how to calculate the Big O notation of functions. Importantly,
                        you&#39;ll also learn how to demonstrate these skills live on a whiteboard - an essential skill for most technical interviews.
                      </p>
                    </Col>
                  </div><hr/></div>
                <div className="curriculum-block">
                  <div className="curriculum-block-container">
                    <Col xs='12' sm='12' md='3' className="icon-col"><img className="curriculum-icon" src="//images.contentful.com/hu62i9v1xxtm/1GRZqUgii0aImCIIUOcOgU/abb48bfdebe2469e01ee2854553d4385/icon_capstone-projects.png?q=80"/></Col>
                    <Col xs='12' sm='12' md='9' className="curriculum-content">
                      <h4 className="label"></h4>
                      <h3 className="title">Capstone Project</h3>
                      <p>Conclude the course by completing an independent capstone project that can demonstrate the full range of your skills to employers. Capstone projects combine the topics you&#39;ll learn in className plus additional technologies
                        you&#39;ll learn on your own to demonstrate your versatility and fitness for a position in an ever-changing tech landscape.
                      </p>
                      <Button color="primary">View Student Projects</Button>
                    </Col>
                  </div>
                </div>
            </div>
        );
    }
}

export default Curriculum;
