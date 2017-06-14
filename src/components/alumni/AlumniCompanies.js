import React from 'react';
import { Link } from 'react-router';
import { Button, Card, CardTitle } from 'reactstrap';

import ReactTooltip from 'react-tooltip';

import './alumni.css'

class AlumniCompanies extends React.Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    tooltipOpen: false
  };
}

toggle(id) {
  if (id) {

  }
   this.setState({
     tooltipOpen: !this.state.tooltipOpen
   });
 }

    render() {
        return (
          <div className="logo-block">
            <div className="logo-container">
              <a className="logo -logo-1 -md" href="https://www.accenture.com" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_accenture.png)`}}></a>
              <a className="logo -logo-2 -md" href="https://www.allstate.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/allstate.com)`}}></a>
              <a className="logo -logo-3 -sm" href="https://choozle.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/choozle.com)`}}></a>
              <a className="logo -logo-4 -sm" href="http://www.apple.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_apple.png)`}}></a>
              <a className="logo -logo-5 -lg" href="https://www.dish.com" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/dish.com)`}}></a>
              <a className="logo -logo-6 -md" href="https://card.americanexpress.com" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_amex.png)`}}></a>
              <a data-tip data-for='ca-tech' className="logo -logo-7 -sm" href="http://www.ca.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_catechnologies.png)`}}></a>
              <a className="logo -logo-8 -lg" href="https://www.amazon.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/amazon.com)`}}></a>
              <a className="logo -logo-9 -md" href="http://us.blizzard.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/blizzard.com)`}}></a>
              <a className="logo -logo-10 -lg" href="http://echostar.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/echostar.com)`}}></a>
              <a className="logo -logo-11 -md" href="http://www.gap.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/gap.com)`}}></a>
              <a data-tip data-for='healthgrades' className="logo -logo-12 -md" href="https://www.healthgrades.com" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_healthgrades.png)`}}></a>
              <a id="homeadvisor"  className="logo -logo-13 -sm" href="http://www.homeadvisor.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/homeadvisor.com)`}}></a>
              <a className="logo -logo-14 -sm" href="http://www.ibm.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_ibm.png)`}}></a>
              <a className="logo -logo-15 -lg" href="http://www.jaybirdsport.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/jaybirdsport.com)`}}></a>
              <a className="logo -logo-16 -md" href="https://kapost.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/kapost.com)`}}></a>
              <a className="logo -logo-17 -sm" href="https://layer3tv.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/layer3tv.com)`}}></a>
              <a className="logo -logo-18 -lg" href="https://www.microsoft.com" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_windows.png)`}}></a>
              <a className="logo -logo-19 -md" href="https://www.nationstarmtg.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_ns.png)`}}></a>
              <a className="logo -logo-20 -lg" href="http://www.opentable.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/opentable.com)`}}></a>
              <a className="logo -logo-21 -sm" href="http://www.pandora.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/pandora.com)`}}></a>
              <a className="logo -logo-22 -md" href="https://pivotal.io/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/pivotal.io)`}}></a>
              <a className="logo -logo-23 -sm" href="https://www.redfin.com" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/redfin.com)`}}></a>
              <a className="logo -logo-24 -sm" href="http://www.rentpath.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/rentpath.com)`}}></a>
              <a className="logo -logo-25 -lg" href="https://www.salesforce.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/salesforce.com)`}}></a>
              <a className="logo -logo-26 -md" href="http://sendgrid.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_sendgrid.png)`}}></a>
              <a className="logo -logo-27 -sm" href="http://www.solarcity.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/solarcity.com)`}}></a>
              <a className="logo -logo-28 -lg" href="http://welltok.com/" target="_blank" style={{backgroundImage:`url(https://logo.clearbit.com/welltok.com)`}}></a>
              <a className="logo -logo-29 -md" href="http://www.zappos.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_zappos.png)`}}></a>
              <a className="logo -logo-30 -lg" href="http://www.zayo.com/" target="_blank" style={{backgroundImage:`url(https://d1cvw29nua6zwm.cloudfront.net/logos/company-logo_zayo.png)`}}></a>
               <ReactTooltip id='ca-tech' type="light"><span>
                 <Card block className="text-center">
                     <img className="profile-photo" src={require("../../images/david.jpg")}/>
                       <a href="https://www.linkedin.com/in/davidshibley" className="name">David Shibley</a>
                       <p className="title-location">Software Developer</p>
                   <Button color="primary">Contact Me</Button>
                 </Card>
               </span></ReactTooltip>
             <ReactTooltip id='healthgrades' type="light"><span>
               <Card block className="text-center">
                   <img className="profile-photo" src={require("../../images/adam.jpg")}/>
                     <a href="https://www.linkedin.com/in/poulsenadam" className="name">Adam Poulson</a>
                     <p className="title-location">Software Developer</p>
                 <Button color="primary">Contact Me</Button>
               </Card>
            </span></ReactTooltip>
          </div>
          </div>
        );
    }
}

export default AlumniCompanies;
