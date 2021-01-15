
import React, { useState, useEffect } from 'react'; // eslint-disable-line
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
        <NavbarBrand href="/"> <img src={'/img/avisbudget_logo.svg'} alt="" className="ge-img"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/step1">Lojas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/step2">Procurar reserva</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Cadastro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Faca login na sua conta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Fale Conosco</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    

        </div>
    )
}

export default NavBar;