import React from "react";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import { Link, Item } from "react-router-dom";

function Header() {
return (
  <React.Fragment>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Quiz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item >
            Add Quiz
          </Nav.Item>
          <Nav.Item >
            <Link to="/">My Quizzes</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/signin">Account</Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </React.Fragment>
);
}

export default Header;