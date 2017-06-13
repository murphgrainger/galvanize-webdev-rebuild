import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/common/Header';
import Home from './components/home/HomePage';
import OurTeam from './components/our-team/OurTeam';


ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/our-team" component={OurTeam}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
