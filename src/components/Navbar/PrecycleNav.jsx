import React, { useState } from "react";
import NavbarModal from "../NavbarModal/NavbarModal";

import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Navbar/PrecycleNav.css";

// images
import Logo1 from "../Navbar/image/Logo1.png";

export default function PrecycleNav() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="mySecondary" expand="lg" style={{ zIndex: "1000" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo1} alt="Main Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav>

          <div>
            <Button className="partnerBtn p-2" size="md">
              Partner with us
            </Button>{" "}
            <Button
              className="pickupBtn p-2"
              size="md"
              onClick={() => setModalShow(true)}
            >
              Waste pickup
            </Button>
            <NavbarModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
