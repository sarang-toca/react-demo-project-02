import React from "react";
import "./header.css";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="#ccc" expand="lg" className="app-header">
      <Navbar.Brand href="#home">TOPS Infosolutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  showBackground: PropTypes.bool,
};

export default Header;
