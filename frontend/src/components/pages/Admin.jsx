import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container  from "react-bootstrap/Container";
//import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const Admin=()=>{

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SLIIT -RPM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/panel-management">Panel Allocation</Link>

                        <Link className="nav-link" to="/">Marking Schemes</Link>

                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>|ADMIN|</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Admin;