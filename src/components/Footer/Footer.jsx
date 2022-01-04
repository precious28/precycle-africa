import { Container, Button, Col, Row, Stack } from "react-bootstrap";
import "../Footer/Footer.css";

// images
import Logo2 from "../Footer/footerImages/Logo2.png";
import Twitter from "../Footer/footerImages/Twitter.png";
import Facebook from "../Footer/footerImages/Facebook.png";
import Linkedin from "../Footer/footerImages/Linkedin.png";
import Vector from "../Footer/footerImages/Vector.png";
import Email from "../Footer/footerImages/Email.png";
import Contact from "../Footer/footerImages/Contact.png";
import Subscribe from "../Footer/footerImages/Subscribe.png";

export default function PrecycleFooter() {
  return (
    <>
      <div className="customBackground p-2 p-md-5">
        <Container>
          <Row>
            <Col lg={5}>
              <Stack gap={3}>
                <div>
                  <img src={Logo2} alt="" />
                </div>

                <div>
                  Precycle is a social enterprise that leverages patnership and
                  innovative volunteering, policy advocacy and environmental
                  education to combat the menace of plastic waste pollution in
                  Africa.
                </div>
                <div className="">
                  {" "}
                  <img src={Contact} alt="" /> +234 908 0041000
                </div>
                <div className="">
                  {" "}
                  <img src={Email} alt="" /> info@precycle.com
                </div>
                <div className=" fw-bold fs-5">Inside Gist!</div>
                <div className="">
                  Be the first to know about our exciting news, updates and
                  events. No spam, just useful information about how we are
                  building an eco friendly Africa.
                </div>

                <div className="custom-group">
                  <span className="custom-group-text">
                    <img src={Subscribe} alt="" />
                  </span>
                  <input
                    className="custom-group-input"
                    type="text"
                    aria-label="First name"
                    placeholder="Enter your email address"
                    class="form-control"
                  />
                  <Button className="subscribeButton">Subscribe</Button>
                </div>
              </Stack>
            </Col>
            <Col lg={1} className="border-end border-1 border-success"></Col>

            <Col lg={5}>
              <Container>
                <Row>
                  <Col>
                    <Stack gap={2}>
                      <div className="mb-4 fw-bold">Services</div>
                      <div className="">Plastic Waste Pickup</div>
                      <div className="">Become a Partner</div>
                      <div className="">Become a Volunteer</div>
                    </Stack>
                  </Col>
                  <Col>
                    <Stack gap={2}>
                      <div className="mb-4 fw-bold">About us</div>
                      <div className="">Our Story</div>
                      <div className="">Our Model</div>
                      <div className="">Special Projects</div>
                    </Stack>
                  </Col>
                </Row>

                <Stack gap={3}>
                  <div className="mt-5 fw-bold fs-5">
                    Connect with us on Social Media
                  </div>
                  <div className="">
                    Follow us on social media for the latest recycling news and
                    tips on how to reduce your carbon footprint.
                  </div>
                </Stack>
              </Container>

              <Stack
                direction="horizontal"
                gap={5}
                className="align-items-center justify-content-center mt-4"
              >
                <img src={Twitter} className="" alt="" />
                <img src={Facebook} className="" alt="" />
                <img src={Linkedin} className="" alt="" />
                <img src={Vector} className="" alt="" />
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footerColor">
        <div className="text-center py-3">
          &copy; 2022 Precycle All rights reserved
        </div>
      </footer>
    </>
  );
}
