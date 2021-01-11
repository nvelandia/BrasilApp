
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
              <NavLink href="/"><b>Inicio</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><b>Lojas</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><b>Procurar reserva</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><b>Cadastro</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><b>Faca login na sua conta</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><b>Fale Conosco</b></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    

        </div>
    )
}

export default NavBar;