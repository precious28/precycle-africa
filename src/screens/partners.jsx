import HomeLayoutWrapper from "../components/Layouts/HomeLayoutWrapper";
import { Container, Button, Col, Row, Stack } from "react-bootstrap";

// images
import partner1 from "../Images/partner1.png";
import partner2 from "../Images/partner2.png";

export default function Partners() {
  return (
    <HomeLayoutWrapper>
      <Stack
        gap={3}
        className="align-items-center justify-content-center customHeight  text-center"
      >
        <Col lg={4} className="fs-3 fw-bold mt-5 mySecondary">
          Support Our Zero Plastic Waste Campaigns
        </Col>
        <Col lg={6} className="fs-5 primaryText mb-5">
          We welcome all corporate organizations, environmental activists and
          enthusiasts who share the vision of a world free of plastic pollution.
          it's a big job, and we will succeed only by working together.
        </Col>
      </Stack>

      <div className="toRightgradient">
        <Container>
          <Row className="gap-2">
            <Col sm={4} md={true} lg={true}>
              <Stack gap={4} className="mb-5">
                <div className="fs-6  fw-bold mt-5">REDUCE, REUSE, RECYCLE</div>
                <div className="fs-5 fw-bold mySecondary">
                  Engagement & Environmental Advocacy
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  Our 3Rs (Reduce, Reuse, Recycle) Campaign is geared towards
                  the introduction of grassroot movements to combat and advocate
                  for a minimal production of plastic waste in Africa.
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  We aim to partner with schools and organizations to introduce
                  Zero Plastic Waste schemes to schools, colleges and
                  communities within Africa.
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  Our goal is to spread awareness about plastic waste and its
                  effect to Climate Change while also encouraging individuals to
                  refuse single-use plastics, reuse what can be reused, and
                  recycle what can be recycled.
                </div>
              </Stack>
            </Col>

            <Col sm={6} md={true} lg={true}>
              <img src={partner1} className="partnersImage img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="toLeftgradient">
        <Container>
          <Row className="gap-2">
            <Col sm={6} md={true} lg={true}>
              <img src={partner2} className="partnersImage img-fluid" alt="" />
            </Col>

            <Col sm={4} md={true} lg={true}>
              <Stack gap={4} className="mb-5">
                <div className="fs-6  fw-bold mt-5">COMMUNITY EMPOWERMENT</div>
                <div className="fs-5 fw-bold mySecondary">
                  Plastic Repurpose & Recycling Programs
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  Our mission is to reduce plastic waste plaguing our planet and
                  the poverty level of some of the poorest people in Africa.
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  Our goal is simple to have one billion people across Africa
                  collecting and turning plastic waste into wealth to improve
                  the quality of life of some of our poorest people, especially
                  in communities with very high plastic waste pollution and
                  poverty level.
                </div>
                <div className="col-12 col-lg-9 col-md-12 mb-5">
                  Through our empowerment program, we aim to train communities
                  ways to create value from plastic waste by teaching them
                  simple plastic recycling solutions.
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>

      <Stack
        gap={3}
        className="align-items-center justify-content-center customHeight  text-center mt-5"
      >
        <Col lg={4} className="fs-3 fw-bold mySecondary">
          Pledge Your Support
        </Col>
        <Col lg={6} className="fs-5 primaryText mb-5">
          Saving the planet from climate change is ultimately our collective
          responsibility. Join us to tangible social and environmental impact as
          we protect our climate and create jobs in emerging economies.
        </Col>
        <Stack
          gap={3}
          className=" d-flex justify-content-center align-items-center"
        >
          <Button variant="outline-primary" className="partnerWithBtn p-2 col-2" size="md">
            Partner with Us
          </Button>
          <Button variant="outline-primary" className="trainingBtn p-2 col-2 mb-5" size="md">
            Make a donation
          </Button>
        </Stack>
      </Stack>
    </HomeLayoutWrapper>
  );
}
