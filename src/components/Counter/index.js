import React, { Component } from "react";

class Incremental extends Component {
  state = {
    count: 0,
  };
  //setting a function to handle clicks//
  handleClick = () => {
    //set state of the count which is the count plus one. this is what the handleclick function is doing //
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  handleMisClick = () => {
    //set state of the count which is the count plus one. this is what the handleclick function is doing //
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };
  render() {
    //render the button with the built in function using state //
    return (
      <>
        <button onClick={this.handleClick}>{this.state.count}</button>
        <button onClick={this.handleClick}>Plus</button>
        <button onClick={this.handleMisClick}>Minus</button>
      </>
    );
  }
}

export default Incremental;
