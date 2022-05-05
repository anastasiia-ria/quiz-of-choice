import React from "react";
import { Nav, Navbar, Container,} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
return (
  <React.Fragment>
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className = "navbar-brand" to="/">
          Quiz
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Link className = "nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item >
              <Link className = "nav-link" to="/">My Quizzes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className = "nav-link" to="/signin">Account</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </React.Fragment>
);
}

export default Header;