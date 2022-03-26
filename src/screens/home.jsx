import HomeLayoutWrapper from "../components/Layouts/HomeLayoutWrapper";
import {
  Container,
  Card,
  CardGroup,
  Button,
  Col,
  Row,
  Stack,
} from "react-bootstrap";
import "../Styles/custom.css";
// images
import Hero from "../Images/Hero.png";
import Recycle1 from "../Images/Recycle1.png";
import Recycle2 from "../Images/Recycle2.png";
import Recycle3 from "../Images/Recycle3.png";
import Partner from "../Images/Partner.png";
import Wealth from "../Images/Wealth.png";
import Volunteer from "../Images/Volunteer.png";
import SDG1 from "../Images/SDG1.png";
import SDG2 from "../Images/SDG2.png";
import SDG3 from "../Images/SDG3.png";
import SDG4 from "../Images/SDG4.png";
import Training1 from "../Images/Training1.png";
import Training2 from "../Images/Training2.png";

export default function Home() {
  return (
    <HomeLayoutWrapper>
      <>
        <div>
          <Card.Img
            src={Hero}
            className="heroHeight img-responsive"
            alt="Card image"
          />
          <Card.ImgOverlay className="mt-5">
            <Container>
              <div className="d-flex flex-column justify-content-center heroContainer">
                <Col lg={4} md={7}>
                  <Card.Title className="mySecondary fs-2 fw-bold">
                    Creating value from plastic waste
                  </Card.Title>
                  <Card.Text className="card-text fs-5 fw-bold accentWhite">
                    Help stop ocean plastic and improve the lives of collector
                    communities by aiding the recovery of ocean-bound plastic.
                  </Card.Text>
                  <Button className="partnerBtn p-2 col-6" size="md">
                    Learn More
                  </Button>
                </Col>
              </div>
            </Container>
          </Card.ImgOverlay>
        </div>

        <div className="d-flex align-items-center justify-content-center customHeight fs-2 fw-bold mySecondary lh-sm text-center ">
          <Col lg={5} md={8}>
            A continental Plastic Problem we Need to Understand
          </Col>
        </div>

        <Container className="mb-5">
          <CardGroup className="gap-lg-5 gap-md-3">
            <Card className="shadow cardStyles">
              <Card.Body className="customBackground cardStyles ">
                <Card.Img className="imageHeight p-3" src={Recycle1} />
                <Card.Text className="fs-6 p-lg-4 p-4 p-md-0 blackText">
                  1 in 3 people in Africa burn or dump their plastic waste in
                  improper places like waterways.{" "}
                  <p className="mt-3">
                    A high amount of energy consumed to burn or produce plastic
                    resulting in greenhouse gas emissions.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow cardStyles">
              <Card.Body className="customBackground cardStyles">
                <Card.Img className="imageHeight p-3" src={Recycle2} />
                <Card.Text className="fs-6 p-lg-4 p-4 p-md-0 blackText">
                  Improper disposal of plastic waste can result in clogged
                  drainages, diseases and the pollution of water bodies.
                  <p className="mt-3">
                    Also, plastic debris are sometimes ingested by aquatic
                    animals which can harm them.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="shadow cardStyles">
              <Card.Body className="customBackground cardStyles">
                <Card.Img className="imageHeight p-3" src={Recycle3} />
                <Card.Text className="fs-6 p-lg-4 p-4 p-md-0 blackText">
                  Precycle seeks to employ ways to tackle the global climate
                  crisis.
                  <p className="mt-3">
                    We implement waste management and recycling programmes to
                    improve livelihoods and promote circular economy.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>

        <div className="customBackground p-2 p-md-5">
          <Stack
            gap={3}
            className="align-items-center justify-content-center customHeight  text-center"
          >
            <div className="fs-3 fw-bold mySecondary">Make an impact Today</div>
            <Col lg={5} className="fs-5 primaryText">
              Join us to make socioeconomic impact as we rid our cities and
              waterways of plastic waste.
            </Col>
          </Stack>

          <Container className="mt-5">
            <Row className="gap-5">
              <Col sm={6} md={true} lg={true}>
                <img src={Partner} className="mainImage img-fluid" alt="" />
              </Col>

              <Col sm={4} md={true} lg={true}>
                <Stack gap={4}>
                  <div className="fs-6  fw-bold">OFFSET POLUTION & POVERTY</div>
                  <div className="fs-5 fw-bold mySecondary">
                    Impact Patnership
                  </div>
                  <div className="col-12 col-lg-9 col-md-12">
                    Are you a company that is passionate about creating value
                    from plastic waste and wants to create positive
                    socioeconomic and environmental change in our communities.
                  </div>
                  <div className="col-12 col-lg-9 col-md-12">
                    Help stop ocean plastic and improve the lives of collector
                    communities by aiding the recovery of ocean-bound plastic.
                  </div>
                  <Button
                    className="pickupBtn fw-bold  p-2 col-5 mt-2"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="mt-5 mb-5">
          <Row className="gap-5">
            <Col sm={5} md={true} lg={true}>
              <Stack gap={4}>
                <div className=" fs-6  fw-bold ">
                  CREATE SOCIOECONOMIC VALUE
                </div>
                <div className="mySecondary fs-5 fw-bold">Waste to Wealth</div>
                <div className="col-12 col-lg-9 col-md-12">
                  Your PET bottle and other plastic containers are too valuable
                  to be thrown away. Turn in your plastic waste and get rewarded
                  for saving Mother Earth.
                </div>
                <div className="col-12 col-lg-9 col-md-12">
                  Together we can create value out of your plastic waste and
                  recyle them into other useful and reusable products.
                </div>
                <Button
                  className="pickupBtn fw-bold opacity-75 p-2 col-5 mt-2"
                  size="sm"
                >
                  Waste Pickup
                </Button>
              </Stack>
            </Col>

            <Col sm={6} md={true} lg={true}>
              <img src={Wealth} className="mainImage" alt="" />
            </Col>
          </Row>
        </Container>

        <div className="customBackground p-2 p-md-5">
          <Container className="">
            <Row className="gap-5">
              <Col sm={6} md={true} lg={true}>
                <img src={Volunteer} className="mainImage" alt="" />
              </Col>

              <Col sm={5} md={true} lg={true}>
                <Stack gap={3}>
                  <div
                    className="fs-6  fw-bold col-10 col-lg-6 col-md-9
                  "
                  >
                    FOSTER SUSTAINABILITY THROUGH VOLUNTEERISM
                  </div>
                  <div className="mySecondary fs-5 fw-bold">
                    Volunteer for Change
                  </div>
                  <div className="col-12 col-lg-9 col-md-12">
                    Interested in voluteering and advocating for a cleaner and
                    greener world? Want to combat the menace of plastic
                    pollution?
                  </div>
                  <div className="col-12 col-lg-9 col-md-12">
                    Join other Precycle volunteers all over Africa in fighting
                    climate change and making our environment cleaner than ever.
                  </div>
                  <Button
                    className="pickupBtn fw-bold p-2 col-5 mt-2"
                    size="sm"
                  >
                    Become a Volunteer
                  </Button>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>

        <Stack
          gap={3}
          className="align-items-center justify-content-center customHeight  text-center"
        >
          <div className="fs-3 fw-bold mySecondary">
            Community Development Projects
          </div>
          <Col lg={5} className="fs-5 mb-3 primaryText">
            Our projects support 4 out of the UN's 17 Sustainable Development
            Goals
          </Col>
        </Stack>
        <Container>
          <Row
            gap={2}
            className=" justify-content-center customHeight  text-center"
          >
            <Col xs={6} md={2}>
              <img src={SDG1} className="sdgImage" alt="" />
            </Col>
            <Col xs={6} md={2}>
              <img src={SDG2} className="sdgImage" alt="" />
            </Col>
            <Col xs={6} md={2}>
              <img src={SDG3} className="sdgImage" alt="" />
            </Col>
            <Col xs={6} md={2}>
              <img src={SDG4} className="sdgImage" alt="" />
            </Col>
          </Row>
        </Container>

        <Container className="mb-5">
          <div className=" d-flex justify-content-center align-items-center p-2 p-md-4 blackText">
            <CardGroup className="gap-5">
              <Card className="shadow cardStyles">
                <Card.Img variant="top" src={Training2} />
                <Card.Body className="customBackground cardStyles p-3 p-lg-5 p-md-3">
                  <Card.Title className="mySecondary fs-5 fs-md-4 lh-base fw-bold">
                    SKILLS TRAINING ON PLASTIC RECYCLING
                  </Card.Title>
                  <Card.Text className=" fs-md-5 mt-3">
                    We create livelihood opportunities for communities
                    especially youths and women through our plastic recycling
                    training programme.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="shadow cardStyles">
                <Card.Img variant="top" src={Training1} />
                <Card.Body className="customBackground cardStyles p-3 p-lg-5 p-md-3">
                  <Card.Title className="mySecondary fs-5 fs-md-4 lh-base fw-bold">
                    WASTE POLLUTION AWARENESS CAMPAIGN
                  </Card.Title>
                  <Card.Text className="fs-md-5 mt-3">
                    We spread awareness about the impact of plastic and plastic
                    pollution on our environment. We also educate people about
                    other eco-friendly options to explore.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>

          <div className=" d-flex justify-content-center align-items-center">
            <Button className="trainingBtn p-2 col-2" size="md">
              Learn more
            </Button>
          </div>
        </Container>
      </>
    </HomeLayoutWrapper>
  );
}
