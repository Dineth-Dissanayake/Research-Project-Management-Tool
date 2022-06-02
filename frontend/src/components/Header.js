import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container  from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">RENT A CAR SYSTEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Dashboard</Link>

                        <NavDropdown title="Company Vehicles" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" to="/add">Add New Vehicle</Link>
                        </NavDropdown>

                        <NavDropdown title="Third party Vehicles" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add New Vehicle</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Manage Vehicles</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>|VEHICLE MANAGER|</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;