import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
      <div className="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to='/'>News Germany</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">All News</Nav.Link>
                <Nav.Link href="#pricing">Catagories</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
              <div className="d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;  