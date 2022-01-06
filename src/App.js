import { grey } from "@material-ui/core/colors";
import React, { Component } from "react";
import GridLines from "react-gridlines";
import { Rnd } from "react-rnd";
import Editor from "./Editor";
import SliderComponent from "./Slider";

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
      height: 10,
      width: 10,
      depth: 0,
      x: 0,
      y: 0,
    };
  }
  render() {
    return (
      <div>
        <div
          style={{ width: "25%", float: "left", backgroundColor: "grey" }}
        ></div>
        <div style={{ width: "50%", float: "left" }}>
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
                <img
                  src={require("./layers/ball/red eye ball_sr.png")}
                  alt="x"
                />
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
        <div style={{ width: "25%", float: "right" }}>
          <Editor />
        </div>
      </div>
    );
  }
}
