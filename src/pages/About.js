import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Notification from "../components/Notification";
// if we want to use an image, we can simply grab it using an import and giving it a unique variable name //
import Picture from "../components/images/wallpaper.jpg";
import Delayed from "../components/StateText";
import Demo from "../components/Drawer";
import Incremental from "../components/Counter";
import Cary from "../components/Carousel";
import { Grid, Row, Col } from "rsuite";
import Stepper from "../components/Stepper";
import Wow from "../components/Wowzer";
function About() {
  return (
    <>
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12}>
            <Cary />
          </Col>
          <Col xs={12}>
            <Delayed waitBeforeShow={1000}>
              <h1>Chad Lew</h1>
            </Delayed>
            <h2>Lover</h2>
            <h2>Reader</h2>
            <h2>Netflix-Binger</h2>
            <h2>Delivery Driver</h2>
            <h1>
              <b>Full-Stack Developer</b>
            </h1>
            <h3>{/* <Demo>M</Demo> */}</h3>
          </Col>
        </Row>
      </Grid>
      <Wow />
      <Stepper />
      <div>
        {/* use here */}

        <Container style={{ marginTop: 30 }}>
          <Row>
            <h2>Reliable,</h2>
          </Row>
          <Row>
            <h2>Flexible,</h2>
          </Row>
          <Row>
            <h2>&</h2>
          </Row>
          <Row>
            <h2>Focused-Driven Developer</h2>
          </Row>
          <Notification />

          <Incremental />
          <Row>
            <Col size="md-12">
              <p>
                <Demo />
                My journey of coding was initiated in mid 2020's with the goal
                of becoming an employed software developer somewhere. I'm still
                on course learning as many useful tools that comes in my way. I
                specialize in the M.E.R.N stack because I believe noSQL is the
                future of large scaleable databases, React library for rendering
                components, Express framework for building a fully-fledged web
                application, and Node as the main runtime environment for
                Javascript.
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf5dOsjtfJggOCOS-ljsuOS2BoBBlyMRA7dSLzuk1fzDOzQCA/viewform?embedded=true"
                width="640"
                height="705"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
