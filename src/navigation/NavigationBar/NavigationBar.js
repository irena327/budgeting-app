import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './../../logo.png';
import "./NavigationBar.css";

// not in use -- switched to use MenuBar for dropdown ease

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="md" className="color-nav" variant="dark">
      <Container>
        <Navbar.Brand className="navbrand" href="/home">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="30"
            padding="2px"
          /> {  }
          Expense Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="2023" id="basic-nav-dropdown">
              <NavDropdown.Item href="/2023/January">January</NavDropdown.Item>
              <NavDropdown.Item href="/2023/February">February</NavDropdown.Item>
              <NavDropdown.Item href="/2023/March">March</NavDropdown.Item>
              <NavDropdown.Item href="/2023/April">April</NavDropdown.Item>
              <NavDropdown.Item href="/2023/May">May</NavDropdown.Item>
              <NavDropdown.Item href="/2023/June">June</NavDropdown.Item>
              <NavDropdown.Item href="/2023/July">July</NavDropdown.Item>
              <NavDropdown.Item href="/2023/August">August</NavDropdown.Item>
              <NavDropdown.Item href="/2023/September">September</NavDropdown.Item>
              <NavDropdown.Item href="/2023/October">October</NavDropdown.Item>
              <NavDropdown.Item href="/2023/November">November</NavDropdown.Item>
              <NavDropdown.Item href="/2023/December">December</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="2024" id="basic-nav-dropdown">
              <NavDropdown.Item href="/2024/January">January</NavDropdown.Item>
              <NavDropdown.Item href="/2024/February">February</NavDropdown.Item>
              <NavDropdown.Item href="/2024/March">March</NavDropdown.Item>
              <NavDropdown.Item href="/2024/April">April</NavDropdown.Item>
              <NavDropdown.Item href="/2024/May">May</NavDropdown.Item>
              <NavDropdown.Item href="/2024/June">June</NavDropdown.Item>
              <NavDropdown.Item href="/2024/July">July</NavDropdown.Item>
              <NavDropdown.Item href="/2024/August">August</NavDropdown.Item>
              <NavDropdown.Item href="/2024/September">September</NavDropdown.Item>
              <NavDropdown.Item href="/2024/October">October</NavDropdown.Item>
              <NavDropdown.Item href="/2024/November">November</NavDropdown.Item>
              <NavDropdown.Item href="/2024/December">December</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
