import React, { Component } from "react";
import Navbar from "./navbar";
import TextFields from "./OutlinedText";
import Buttons from "./Buttons";

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

  handlePlusInput = () => {
    let i = Number(this.state.output + this.state.input);
    if (Number.isInteger(i)) {
      this.setState({ output: i });
    } else {
      alert("Input is invalid");
    }
  };

  handleMinusInput = () => {
    let i = Number(this.state.output - this.state.input);
    if (Number.isInteger(i)) {
      this.setState({ output: i });
    } else {
      alert("Input is not valid");
    }
  };

  handlePlus1 = () => {
    const i = this.state.output + 1;
    this.setState({ output: i });
  };

  handleMinus1 = () => {
    const i = this.state.output - 1;
    this.setState({ output: i });
  };

  render() {
    return (
      <div>
        <Navbar output={this.state.output} />
        <br />

        <br />
        <TextFields onChange={this.handleChange} />
        <br />
        <Buttons
          onPlus1={this.handlePlus1}
          onMinus1={this.handleMinus1}
          onPlusInput={this.handlePlusInput}
          onMinusInput={this.handleMinusInput}
        />
      </div>
    );
  }
}

export default App1;
