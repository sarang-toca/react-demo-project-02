import React from "react";
import "./header.css";
import PropTypes from "prop-types";
import { Navbar, Nav} from "react-bootstrap";
import { useSelector } from "react-redux";
import LogoutButton from "assets/buttons/LogoutButton";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Navbar bg="#ccc" expand="lg" className="app-header">
      <Navbar.Brand href="#home">TOPS Infosolutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        {isLoggedIn && <LogoutButton>Logout</LogoutButton>}
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  showBackground: PropTypes.bool,
};

export default Header;
