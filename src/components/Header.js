import React from 'react';
import logo from '../assets/logo_header.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';


export default (props) => 
<Navbar collapseOnSelect fixedTop className={(props.location !== '/') ? 'navbarElse' : 'navbarIndex'}>

  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">
        <img src={logo} alt="Aceleracion Labs."/>
      </a>
    </Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>

  <Navbar.Collapse>
    <Nav pullRight>
      <IndexLinkContainer to="/">
        <NavItem>INICIO</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/who">
        <NavItem>SOMOS</NavItem>
      </LinkContainer>
      <LinkContainer to='/how'>
        <NavDropdown  className="dropdown" title="TE AYUDAMOS" id="basic-nav-dropdown">
          <LinkContainer to='/how/comunicaciones'>
            <MenuItem className="dropdown-content">COMUNICACIONES Y MARKETING DIGITAL</MenuItem>
          </LinkContainer>
          <LinkContainer to='/how/diseño'>
            <MenuItem className="dropdown-content">DISEÑO E IDENTIDAD CORPORATIVA</MenuItem>
          </LinkContainer>
          <LinkContainer to='/how/ti'>
            <MenuItem className="dropdown-content">SOLUCIONES TI</MenuItem>
          </LinkContainer>
          <LinkContainer to='/how/negocios'>
            <MenuItem className="dropdown-content">MODELOS DE NEGOCIOS</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </LinkContainer>
      {/*<LinkContainer to="/">*/}
        {/*<NavItem>BLOG</NavItem>*/}
      {/*</LinkContainer>*/}
      <LinkContainer to="/contact">
        <NavItem>CONTACTO</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>

</Navbar>;
