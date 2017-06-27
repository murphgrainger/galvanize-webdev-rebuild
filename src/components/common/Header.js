import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

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
       <NavbarBrand href="#pagetop"><img id="logo" src={require("../../images/galvanize_logo.png")}/></NavbarBrand>
       <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink href="#studentlife">Student Life</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#ourteam">Our Team</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#graduates">Graduates</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="#apply">apply</NavLink>
           </NavItem>
         </Nav>
       </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
