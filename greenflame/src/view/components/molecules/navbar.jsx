
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { Link } from "react-router-dom";
import  translate from '../../../translates/translations';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

function NavBar (props) {


    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (

        <div className="ge-na">

        <Navbar  light expand="lg">
        <NavbarBrand><Link to="/"> <img src={'/img/avisbudget_logo.svg'} alt="Avis Budget" className="ge-img"/></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex justify-content-around navbar-nav w-100" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.home}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.offices}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.searchReserve}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.signUp}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.signIn}</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">{translate.general.navbar.contact}</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    

        </div>
    )
}

const mapStateToProps = state => {
  return {
      lang: state.lang
  }
}

export default connect(mapStateToProps)(NavBar);
