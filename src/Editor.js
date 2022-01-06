import { common, grey } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@material-ui/icons";
import React, { Component } from "react";
import SliderComponent from "./Slider";

export default class Editor extends Component {
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

  commonStyle = {
    margin: "20px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#efefef",
          height: "100vh",
          margin: "5px",
          padding: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "#dee2e7",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "1px 3px 1px #acacaf",
          }}
        >
          <div style={{ alignContent: "center" }}>Editor</div>

          <div style={this.commonStyle}>
            Height:
            <SliderComponent />
          </div>
          <div style={this.commonStyle}>
            Weight:
            <SliderComponent />
          </div>
          <div style={this.commonStyle}>
            Depth:
            <SliderComponent />
          </div>
          <div style={this.commonStyle}>
            X:
            <SliderComponent />
          </div>
          <div style={this.commonStyle}>
            Y:
            <SliderComponent />
          </div>
        </div>
      </div>
    );
  }
}
