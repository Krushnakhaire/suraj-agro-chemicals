import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './App.css';

const NavbarComponent = () => {
  return (
    <>
      {/* Dark Theme Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Suraj Agro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/company">Company</Nav.Link>
              <Nav.Link href="/delivery-details">Delivery</Nav.Link>
              <Nav.Link href="/fertilizer-shop">Fertilizer Shop</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/payment-receipt">Payment Receipt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


   
    </>
  );
};

export default NavbarComponent;