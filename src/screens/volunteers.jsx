import HomeLayoutWrapper from "../components/Layouts/HomeLayoutWrapper";
import { Container, Card, Stack, Button, Col } from "react-bootstrap";

//   images
import Volunteer from "../Images/volunteerImage.png";

export default function VolunteersPage() {
  return (
    <HomeLayoutWrapper>
      <>
        <div>
          <Card.Img
            src={Volunteer}
            className="heroHeight img-responsive"
            alt="Card image"
          />
          <Card.ImgOverlay className="mt-5">
            <Container>
              <div className="d-flex flex-column justify-content-center heroContainer">
                <Col lg={4} md={7}>
                  <Card.Title className="mySecondary fs-2 fw-bold">
                    Join the Plastic Cleanup Movement
                  </Card.Title>
                  <Card.Text className="card-text fs-5 fw-bold accentWhite">
                    With your support we can fight plastic pollution in Africa.
                  </Card.Text>
                </Col>
              </div>
            </Container>
          </Card.ImgOverlay>
        </div>

        <Container className="volunteerText">
          <Stack gap={3} className="p-2">
            <div className="d-flex align-items-center justify-content-center fs-2 fw-bold mySecondary text-center mt-5 mb-5 ">
              <Col lg={9} md={8}>
                Let's Work Together
              </Col>
            </div>
            <div>
              Thank you for your interest in volunteering with Precycle Africa!
            </div>
            <div>
              You are the beating heart of our organization and we are excited
              about the good work we will do together towards achieving Zero
              Plastic Waste.
            </div>
            <div>
              There are lots of ways you can get involved with Precycle Africa.
              From participating in our Waste Cleanup programs, and giving a
              talk on pollution and climate change in schools or communities, to
              volunteering your skils and services at any of our events across
              Africa.
            </div>
            <div>
              Click the button below to join the{" "}
              <span className="primaryText">#EndPlasticWaste</span> Movement and
              help us put an end to plastic waste in Africa.
            </div>
            <div className=" d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="https://forms.gle/W1XFq7dRm2RM44Rv6" rel="noreferrer" target={"_blank"}>
                <Button className="partnerWithBtn p-2 col-2" size="md">
                  Learn more
                </Button>
              </a>
            </div>
          </Stack>
        </Container>
      </>
    </HomeLayoutWrapper>
  );
}
