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

var ReactGA = require('react-ga');
ReactGA.initialize('UA-100879860-2');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


ReactDOM.render(
  <Router
    onUpdate={logPageView}>
    <div>
      <Header />
      <Home />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
