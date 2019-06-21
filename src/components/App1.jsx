import React, { Component } from "react";
import Navbar from "./navbar";

class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = { input: 0, output: 0 };
  }

  handleChange = event => {
    console.log(event.target.value);
    let i = Number(event.target.value);

    this.setState({ input: i });
  };

  handleIncrement = () => {
    let i = Number(this.state.output + this.state.input);
    if (Number.isInteger(i)) {
      this.setState({ output: i });
    } else {
      alert("Input is in  valid");
    }
  };

  handleDecrement = () => {
    let i = Number(this.state.output - this.state.input);
    if (Number.isInteger(i)) {
      this.setState({ output: i });
    } else {
      alert("Input is not valid");
    }
  };
  render() {
    return (
      <div>
        <Navbar output={this.state.output} />
        <br />
        <span className="badge badge-primary">Enter an integer: </span>
        <input
          type="text"
          onChange={event => {
            this.handleChange(event);
          }}
        />

        <br />
        <br />
        <button className="btn btn-primary m-1" onClick={this.handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger m-1" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App1;
