import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class Navbar2 extends Component {
  render() {
    return (
      < Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"> Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/articles">articles</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar2;
