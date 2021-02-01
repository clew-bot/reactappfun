import React from "react";
import "./style.css";

function Hero(props) {
  return (
    //setting the property of the background using props, then any component that wants to use any of these variables can just use the key. //
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </div>
  );
}

export default Hero;
