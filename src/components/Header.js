import React from "react";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link onClick={}>
            Add Quiz
          </Nav.Link>
          <Nav.Link onClick={}>
            <Link to="/">My Quizzes</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/signin">Account</Link>
          </Nav.Link>
          <Form onSubmit={handleSearchSubmission} className="d-flex search-bar">
            <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" name="search" />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </React.Fragment>
);
}

export default Header;