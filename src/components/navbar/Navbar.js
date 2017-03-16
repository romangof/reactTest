import React, {Component} from 'react';
import logo from '../../assets/logo_header.png';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

// var Navbar = require('react-bootstrap').Navbar;
// var Nav = require('react-bootstrap').Nav;
// var NavItem = require('react-bootstrap').NavItem;
// var MenuItem = require('react-bootstrap').MenuItem;
// var NavDropdown = require('react-bootstrap').NavDropdown;

export default class Top extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop>
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
                        <NavDropdown eventKey={3} title="TE AYUDAMOS" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>COMUNICACIONES Y MARKETING DIGITAL</MenuItem>
                            <MenuItem eventKey={3.2}>DISEÑO E IDENTIDAD CORPORATIVA</MenuItem>
                            <MenuItem eventKey={3.3}>SOLUCIONES TI</MenuItem>
                            <MenuItem eventKey={3.4}>MODELOS DE NEGOCIOS</MenuItem>
                        </NavDropdown>
                        <LinkContainer to="/">
                            <NavItem>BLOG</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <NavItem>CONTACTO</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

