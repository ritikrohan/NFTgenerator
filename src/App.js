import React, { Component } from "react";
import GridLines from "react-gridlines";
import { Rnd } from "react-rnd";

const defaultProps = {
  height: "400px",
  width: "200px",
  depth: 0,
  x: 0,
  y: 0,
};

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: { ...defaultProps },
      b: { ...defaultProps },
    };
  }
  render() {
    return (
      <div
        style={{
          width: "8000px",
          height: "4000px",
        }}
      >
        <GridLines
          className="grid-area"
          cellWidth={60}
          strokeWidth={2}
          cellWidth2={12}
        >
          <div
            style={{
              width: "800px",
              height: "400px",
            }}
          >
            <Rnd bounds="window" style={{ zIndex: 0 }}>
              <img src={require("./layers/ball/red eye ball_sr.png")} alt="x" />
            </Rnd>
          </div>
          <div
            style={{
              width: "800px",
              height: "400px",
            }}
          >
            <Rnd bounds="window" style={{ zIndex: 1 }}>
              <img src={require("./layers/iris/large.png")} alt="x" />
            </Rnd>
          </div>
        </GridLines>
      </div>
    );
  }
}
