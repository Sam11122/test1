import React, { Component } from "react";
import Navbar from "./navbar";
import TextFields from "./OutlinedText";
import Buttons from "./Buttons";
import LineChart from "react-linechart";

class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 0,
      data: [
        {
          color: "steelblue",
          points: [{ x: 0, y: 0 }]
        }
      ]
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    let i = Number(event.target.value);

    this.setState({ input: i });
  };

  handlePlusInput = () => {
    let i = Number(
      this.state.data[0].points[this.state.data[0].points.length - 1].y +
        this.state.input
    );

    let arr = [...this.state.data];
    let ar1 = arr[0];
    let pts = ar1.points;
    let lastEntry = pts[pts.length - 1];
    pts.push(lastEntry);
    let xx = lastEntry.x + 1;
    let yy = i;
    pts.push({ x: xx, y: yy });
    ar1.points = pts;
    arr[0] = ar1;

    this.setState({ data: arr });
  };

  handleMinusInput = () => {
    let i = Number(
      this.state.data[0].points[this.state.data[0].points.length - 1].y -
        this.state.input
    );

    let arr = [...this.state.data];
    let ar1 = arr[0];
    let pts = ar1.points;
    let lastEntry = pts[pts.length - 1];
    pts.push(lastEntry);
    let xx = lastEntry.x + 1;
    let yy = i;
    pts.push({ x: xx, y: yy });
    ar1.points = pts;
    arr[0] = ar1;

    this.setState({ data: arr });
  };

  handlePlus1 = () => {
    let arr = [...this.state.data];
    let ar1 = arr[0];
    let pts = ar1.points;
    let lastEntry = pts[pts.length - 1];
    pts.push(lastEntry);
    let xx = lastEntry.x + 1;
    let yy = lastEntry.y + 1;
    pts.push({ x: xx, y: yy });
    ar1.points = pts;
    arr[0] = ar1;

    this.setState({ data: arr });
  };

  handleMinus1 = () => {
    console.log(
      "x=" + this.state.data[0].points[this.state.data[0].points.length - 1].x
    );
    console.log(
      "y=" + this.state.data[0].points[this.state.data[0].points.length - 1].y
    );

    let arr = [...this.state.data];
    let ar1 = arr[0];
    let pts = ar1.points;
    let lastEntry = pts[pts.length - 1];
    pts.push(lastEntry);
    let xx = lastEntry.x + 1;
    let yy = lastEntry.y - 1;
    pts.push({ x: xx, y: yy });
    ar1.points = pts;
    arr[0] = ar1;

    this.setState({ data: arr });
  };

  render() {
    return (
      <div>
        <Navbar
          output={
            this.state.data[0].points[this.state.data[0].points.length - 1].y
          }
        />
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

        <h3 style={{ color: "steelblue" }}>Clicks vs Count </h3>
        <LineChart
          width={
            this.state.data[0].points[this.state.data[0].points.length - 1].x >
            24
              ? 500
              : 300
          }
          height={
            this.state.data[0].points[this.state.data[0].points.length - 1].x >
            24
              ? 500
              : 300
          }
          data={this.state.data}
          xLabel="Clicks"
          yLabel="Count"
        />
      </div>
    );
  }
}

export default App1;
