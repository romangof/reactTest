import React, {Component} from 'react';
import logo from '../../assets/logo_header.png';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
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
                        <a href="#">
                            <img src={logo} alt="Aceleracion Labs."/>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">INICIO</NavItem>
                        <NavItem eventKey={2} href="#">SOMOS</NavItem>
                        <NavDropdown eventKey={3} title="TE AYUDAMOS" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>COMUNICACIONES Y MARKETING DIGITAL</MenuItem>
                            <MenuItem eventKey={3.2}>DISEÑO E IDENTIDAD CORPORATIVA</MenuItem>
                            <MenuItem eventKey={3.3}>SOLUCIONES TI</MenuItem>
                            <MenuItem eventKey={3.4}>MODELOS DE NEGOCIOS</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">BLOG</NavItem>
                        <NavItem eventKey={5} href="#">CONTACTO</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

