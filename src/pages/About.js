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
function About() {
  return (
    <div>
      {/* use here */}
      <Hero backgroundImage={Picture}>
        <Delayed waitBeforeShow={1000}>
          <h1>Chad Lew</h1>
        </Delayed>
        <h2>Full-Stack Developer</h2>
        <h3>M.E.R.N Stack</h3>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <h2>
            Reliable, Flexible, and Focused-Driven Developer Looking for Work
          </h2>
          <Notification />
          <Demo />
        </Row>
        <Row>
          <Col size="md-12">
            <p>Hey, I'm Chad Lew</p>
            <p>
              I started coding in mid 2020's with the goal of becoming an
              employed software developer somewhere. I'm still on course
              learning as many useful tools that comes in my way. I specialize
              in the M.E.R.N stack because I believe noSQL is the future of
              large scaleable databases, React library for rendering components,
              Express framework for building a fully-fledged web application,
              and Node as the main runtime environment for Javascript.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
              Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
              elementum tortor. Nullam eget nibh sit amet odio lobortis
              ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit
              mi, non mattis enim congue at. Proin mi lectus, ullamcorper id
              hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget
              laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae,
              elementum eget lorem. Maecenas vestibulum volutpat orci eu
              pharetra. Praesent vel blandit ante, nec faucibus libero. Sed
              ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id
              dapibus eros. Nullam tempor sem rhoncus porta semper. Proin
              bibendum vulputate nisl, fringilla interdum elit pulvinar eu.
              Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
