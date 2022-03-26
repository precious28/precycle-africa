import { Card, Col, Container, Row } from "react-bootstrap";
import HomeLayoutWrapper from "../components/Layouts/HomeLayoutWrapper";

// images
import About from "../Images/about_us_logo.png";
import OurMission from "../Images/our_mission_logo.png";
import OurVision from "../Images/our_vision_logo.png";
import Volunteer from "../Images/volunteerImage.png";

export default function AboutUs() {
  return (
    <HomeLayoutWrapper>
      <Container fluid style={{background: "#FEFCF7"}}>
        <section>
          <Card.Img
            src={Volunteer}
            className="heroHeight img-responsive"
            alt="Card image"
            style={{objectFit: "cover"}}
          />
        </section>
        <Container fluid>
          <Row className="px-0 mx-0 py-5 px-md-5 mx-md-5">
            <Col md={6} xs={12} className="d-flex align-items-center mb-4 mb-md-0">
              <img src={About} alt="about us logo" style={{objectFit: "cover"}} className="about_img" />
            </Col>
            <Col md={6} xs={12}>
              <p className="fs-4">
                Precycle Africa is a social enterprise dedicated to curbing the menace of plastic 
                pollution and combatting climate change by proactively taking action to achieve zero plastic waste in Africa.
              </p>
              <p className="fs-4">
                Through our innovative solutions spanning volunteering action, advocacy, 
                and plastic waste recycling training, we empower people and communities.
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid style={{background: "#FEFAF0"}}>
          <Row className="px-0 mx-0 py-5 px-md-5 mx-md-5">
            <Col  md={6} xs={12} className="d-flex align-items-center mb-4 mb-md-0">
              <img src={OurMission} alt="our mission logo" style={{objectFit: "cover"}} className="about_img" />
            </Col>
            <Col  md={6} xs={12}>
              <p className="fs-4">
                To raise awareness about the threat of single-use plastics to our planet and advocate on initiatives to reduce plastic waste.
              </p>
              <p className="fs-4">
                To drive and deliver transformational change to end plastic waste in Africa and protect the planet.
              </p>
              <p className="fs-4">
                To train communities on how to help towards curbing waste and empower them with economic opportunities. 
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="px-0 mx-0 py-5 px-md-5 mx-md-5">
            <Col  md={6} xs={12} className="d-flex align-items-center mb-4 mb-md-0">
              <img src={OurVision} alt="our vision logo" style={{objectFit: "cover"}} className="about_img" />
            </Col>
            <Col  md={6} xs={12}>
              <p className="fs-4">
                We envision a cleaner and greener Africa with adequate income opportunities for all.
              </p>
              <p className="fs-4">
                To contribute significantly towards achieving Sustainable Development Goals 
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </HomeLayoutWrapper>
  );
}
