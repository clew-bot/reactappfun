import React from "react";
import { Carousel } from "rsuite";
import CaryImage from "../images/CaryImage/IMG_4040.jpg";
import "./styles.css";

function Cary() {
  return (
    <Carousel autoplay className="custom-slider">
      <img
        src="https://d23.com/app/uploads/2013/08/1180w-600h_disney-legends-steven-jobs.jpg"
        height="250"
        alt="Cobra Kai"
      />
      <img
        src="https://decider.com/wp-content/uploads/2020/08/Cobra-Kai-is-the-Best-Thing-Youll-Watch-on-Netflix-in-2020.jpg?quality=80&strip=all"
        height="250"
        alt="Steve Jobs"
      />
      <img
        src="https://i.ytimg.com/vi/Dy35y8dqBr0/maxresdefault.jpg"
        height="250"
        alt="me vs Google"
      />
      <img src={CaryImage} height="250" alt="My dog Mochi" />
      <img
        src="https://wallpaperaccess.com/full/3949076.jpg"
        height="250"
        alt="I love React!"
      />
    </Carousel>
  );
}

export default Cary;
