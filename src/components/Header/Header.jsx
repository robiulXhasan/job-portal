import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-section  py-2">
      <Navbar open={open} expand="lg">
        <Container>
          <Link to="/" className="navbar-brand fw-bold fs-3">
            Find<span className="fw-bolder text-primary">Your</span>Job
          </Link>
          <Navbar.Toggle onClick={() => setOpen(!open)} />
          <Navbar.Collapse>
            <Nav className="mx-auto fs-5 gap-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/statistics" className="nav-link">
                Statistics
              </Link>
              <Link to="/applied" className="nav-link">
                Applied Jobs
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </Nav>
            <Nav>
              <Button variant="primary">Start Applying</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
