import React, { useState } from "react";
import NavbarModal from "../NavbarModal/NavbarModal";

import { Container, Navbar, Nav, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Navbar/PrecycleNav.css";

// images
import Logo1 from "../Navbar/image/Logo1.png";

export default function PrecycleNav() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="mySecondary" expand="lg" style={{ zIndex: "1000" }}>
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo1} alt="Main Logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold">
            <Nav.Link className="text-white nav__link" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white nav__link" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white nav__link_shop" href="https://precycle.d2l.ng" rel="noreferrer" target={"_blank"}>
              Eco-Shop
            </Nav.Link>
          </Nav>

          <Stack direction="horizontal" gap={5}>
            <Nav.Link className="text-white" as={Link} to="/partners">
              <Button variant="outline-primary" className="partnerBtn p-3 fw-bold" size="sm">
                Partner with Us
              </Button>
            </Nav.Link>

            <Button
              className="wasteBtn p-3 fw-bold"
              size="sm"
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              Waste Pickup
            </Button>
            <NavbarModal show={modalShow} onHide={() => setModalShow(false)} />
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
