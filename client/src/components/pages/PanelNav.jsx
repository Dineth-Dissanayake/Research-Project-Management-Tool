import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const PanelNav = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SLIIT -RPM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link className="nav-link" to="/">Evaluate Marking Schemes</Link>

                        <Nav.Link href="/#">Logout</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>|PANEL MEMBER|</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};


export default PanelNav;