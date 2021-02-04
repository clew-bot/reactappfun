import React, { useState, useEffect } from "react";
import * as API from "./API.js";

function Wow() {
  const [hunger, isHungry] = useState({
    hungerLevel: "IT'S OVER 9K!!!!!!",
    hasHunger: true,
    mood: "",
    name: "",
    big: "",
    firstName: "",
    lastName: "",

    handleInputChange(event) {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;

      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value,
      });
    },
  });

  const [empty, typed] = useState("");

  useEffect(() => {
    API.getDeveloper.then((res) => {
      isHungry(res);
      console.log("Hungry");
      console.log(hunger);
    });
  }, []);

  return (
    <div className="card">
      <div>HELLO WHAT IS YOUR NAME : {hunger.hungerLevel}</div>
      <div>ARE YOU HUNGRY : {hunger.mood}</div>
      <div>IS HUNGRY : {hunger.hasHunger.toString()}</div>
      <div>HUNGER: {hunger.hungerLevel}</div>
      <h1>HELLO WORLD</h1>
      <div className="btn-group">
        <button
          onClick={() =>
            isHungry({ ...hunger, mood: "hungry affffffff", hasHunger: false })
          }
          className="btn btn-danger"
        >
          needa eat
        </button>
        <form className="form">
          <h1>{hunger.firstName}</h1>
          <input
            name="firstName"
            onChange={hunger.handleInputChange}
            type="text"
            placeholder="First Name"
          />
        </form>
        <button
          onClick={() =>
            isHungry({ ...hunger, mood: "i already ate lol", hasHunger: true })
          }
          className="btn btn-success"
        >
          full doe
        </button>
        <h1>{empty}</h1>
        <input type="text" name={typed} />
      </div>
    </div>
  );
}
export default Wow;
