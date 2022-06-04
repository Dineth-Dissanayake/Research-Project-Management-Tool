import React from "react";
import '../style/nav.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from '../images/nav_logo.png';
import {Dropdown} from 'react-bootstrap';


const PanelNav = () => {

    return (
        <Navbar className="bg-color" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="home-cont"><img className="image" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className="nav-content" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/topics-list">Topics List</Link>
                        <Link className="nav-link" to="/request-list">Request List</Link>
                        <Link className="nav-link" to="/">Evaluate Marking Schemes</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle className="db-color" variant="info" id="dropdown-basic">
                                    Hirosh
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Logout</Dropdown.Item>
                                    
                                    <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};


export default PanelNav;