import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './header.css'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render() {
  return (
   <div>
     <Navbar inverse toggleable className="dark-background">
       <NavbarToggler right onClick={this.toggle} />
       <NavbarBrand href="/"><img id="logo" src={require("../../images/galvanize_logo.png")}/></NavbarBrand>
       <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink href="/team/">Our Team</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/outcomes/">Graduates</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/student-life/">Student Life</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/course-dates/">Dates</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/apply/">Apply</NavLink>
           </NavItem>
         </Nav>
       </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
