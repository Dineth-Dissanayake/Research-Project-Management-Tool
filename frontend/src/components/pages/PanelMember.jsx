import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container  from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
//import { Link } from "react-router-dom";


const PenlMember=()=>{

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SLIIT -RPM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                        <NavDropdown title="Evaluation" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Evaluate Topics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Evaluate Students’ Presentations</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>|PANEL MEMBER|</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default PenlMember;