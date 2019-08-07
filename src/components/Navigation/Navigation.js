/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import s from './Navigation.css';
// import Link from '../Link';
// import { connect } from 'react-redux';

class Navigation extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: this.props.store.getState().user,
    };
  }

  toggle() {
    this.setState((state /* , props */) => ({ isOpen: !state.isOpen }));
  }

  render() {
    // console.log('User object in store:')
    // console.log(this.props.store.getState().user)
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">FreeGenes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/collections">
                    Biopart Collections
                  </DropdownItem>
                  <DropdownItem href="/parts">Bioparts</DropdownItem>
                  <DropdownItem href="/authors">Biopart Authors</DropdownItem>
                  <DropdownItem href="/plates">Plates</DropdownItem>
                  <DropdownItem href="/wells">Plate Wells</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {this.state.user ? (
                <NavItem>
                  <NavLink href="/admin">Admin</NavLink>
                </NavItem>
              ) : null}

              {this.state.user ? (
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
              ) : null}

              {!this.state.user ? (
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              ) : null}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
