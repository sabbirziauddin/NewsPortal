import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Authcontext } from "../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
import { FaUserAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(Authcontext);
  const handleLogOut = () => {
    logOut().then(() => {
      console.log("sign out successfully");
    });
  };
  return (
    <div className="mb-4 sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">News Germany</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Catagories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <span className="text-warning">{user?.displayName}</span>
              </Nav.Link>
              <>
                <Nav.Link href="#deets">
                  {user?.uid ? (
                    <Image
                      src={user?.photoURL}
                      style={{ height: "30px" }}
                      roundedCircle
                    ></Image>
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                </Nav.Link>
                <Nav.Link className="d-flex justify-content-center align-items-center">
                  <Button
                    onClick={handleLogOut}
                    className="text-white text-decoration-none p-0"
                    variant="link"
                  >
                    Log Out
                  </Button>
                </Nav.Link>
              </>
              {!user?.uid && (
                <>
                  {" "}
                  <Nav.Link className="d-flex justify-content-center align-items-center">
                    <Link to="/login">
                      <Button
                        className="text-white text-decoration-none p-0"
                        variant="link"
                      >
                        Login
                      </Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="d-flex justify-content-center align-items-center">
                    <Link to="/signup">
                      <Button
                        className="text-white text-decoration-none p-0"
                        variant="link"
                      >
                        Sing Up
                      </Button>
                    </Link>
                  </Nav.Link>
                </>
              )}
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
