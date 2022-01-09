import React from "react";
import SliderComponent from "./Slider";

export const Editor = () => {
  const state = {
    height: 10,
    width: 10,
    depth: 0,
    x: 0,
    y: 0,
  };

  const commonStyle = {
    margin: "20px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };

  const updateSliderHeightValue = (value) => {
    // this.setState({ height: value });
  };

  const updateSliderWidthValue = (value) => {
    // this.setState({ width: value });
  };

  const updateSliderDepthValue = (value) => {
    // this.setState({ depth: value });
  };

  const updateSliderXValue = (value) => {
    // this.setState({ X: value });
  };

  const updateSliderYValue = (value) => {
    // this.setState({ Y: value });
  };

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

        <div style={commonStyle}>
          Height:
          <SliderComponent
            onValueChange={updateSliderHeightValue}
            name={"height"}
            value={state.height}
          />
        </div>
        <div style={commonStyle}>
          Width:
          <SliderComponent
            onValueChange={updateSliderWidthValue}
            name={"width"}
            value={state.width}
          />
        </div>
        <div style={commonStyle}>
          Depth:
          <SliderComponent
            onValueChange={updateSliderDepthValue}
            name={"depth"}
            value={state.depth}
          />
        </div>
        <div style={commonStyle}>
          X:
          <SliderComponent
            onValueChange={updateSliderXValue}
            name={"x"}
            value={state.X}
          />
        </div>
        <div style={commonStyle}>
          Y:
          <SliderComponent
            onValueChange={updateSliderYValue}
            name={"y"}
            value={state.Y}
          />
        </div>
      </div>
    </div>
  );
};
