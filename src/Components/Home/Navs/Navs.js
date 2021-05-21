import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
const Navs = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand href="#home" class>Food bots</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Customer</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navs;