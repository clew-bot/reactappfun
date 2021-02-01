import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Notification from "../components/Notification";
// if we want to use an image, we can simply grab it using an import and giving it a unique variable name //
import Picture from "../components/images/wallpaper.jpg";
import Delayed from "../components/StateText";
import Demo from "../components/Drawer";
import Incremental from "../components/Counter";
function About() {
  return (
    <div>
      {/* use here */}
      <Hero backgroundImage={Picture}>
        <Delayed waitBeforeShow={1000}>
          <h1>Chad Lew</h1>
        </Delayed>
        <h2>Full-Stack Developer</h2>
        <h3>{/* <Demo>M</Demo> */}</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h2>
            Reliable, Flexible, and Focused-Driven Developer Looking for Work
          </h2>
          <Notification />
        </Row>
        <Incremental />
        <Row>
          <Col size="md-12">
            <p>Hey, I'm Chad Lew</p>
            <p>
              <Demo />
              My journey of coding was initiated in mid 2020's with the goal of
              becoming an employed software developer somewhere. I'm still on
              course learning as many useful tools that comes in my way. I
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
  );
}

export default About;
