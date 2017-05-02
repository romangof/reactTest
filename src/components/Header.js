import React from 'react';
import logo from '../assets/logo_header.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {

  state = { isOpen: false }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render () {
    return (
      <Navbar collapseOnSelect fixedTop className={(location.pathname !== '/') ? 'navbarElse' : 'navbarIndex'}>

        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="Aceleracion Labs"/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem>INICIO</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/somos">
              <NavItem>SOMOS</NavItem>
            </LinkContainer>
            <LinkContainer to='/ayudamos' onClick={(event) => event.preventDefault()} >
              <NavDropdown onMouseEnter={ this.handleOpen }
                onMouseLeave={ this.handleClose }
                onToggle={function() {/* I REMOVE A WARNING */}}
                open={ this.state.isOpen } noCaret
                className="dropdown" title="TE AYUDAMOS" id="basic-nav-dropdown">
                <LinkContainer to='/ayudamos/comunicaciones'>
                  <MenuItem className="dropdown-content">COMUNICACIONES Y MARKETING DIGITAL</MenuItem>
                </LinkContainer>
                <LinkContainer to='/ayudamos/diseño'>
                  <MenuItem className="dropdown-content">DISEÑO E IDENTIDAD CORPORATIVA</MenuItem>
                </LinkContainer>
                <LinkContainer to='/ayudamos/ti'>
                  <MenuItem className="dropdown-content">SOLUCIONES TI</MenuItem>
                </LinkContainer>
                <LinkContainer to='/ayudamos/negocios'>
                  <MenuItem className="dropdown-content">MODELOS DE NEGOCIOS</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </LinkContainer>
            {/*<LinkContainer to="/">*/}
              {/*<NavItem>BLOG</NavItem>*/}
            {/*</LinkContainer>*/}
            <LinkContainer to="/contacto">
              <NavItem>CONTACTO</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }  
};

