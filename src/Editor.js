import React from "react";
import { SliderComponent } from "./Slider";
import { ObjectContext, ObjectSelection } from "./App";

export const Editor = () => {
  // eslint-disable-next-line no-undef
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  console.log("objects here are : ", objects);

  console.log("Current selection : ", selection);

  const commonStyle = {
    margin: "20px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };

  const updateSliderHeightValue = (value) => {
    // this.setobjects({ height: value });
  };

  const updateSliderWidthValue = (value) => {
    // this.setobjects({ width: value });
  };

  const updateSliderDepthValue = (value) => {
    // this.setobjects({ depth: value });
  };

  const updateSliderXValue = (value) => {
    // this.setobjects({ X: value });
  };

  const updateSliderYValue = (value) => {
    // this.setobjects({ Y: value });
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
            value={objects.height}
          />
        </div>
        <div style={commonStyle}>
          Width:
          <SliderComponent
            onValueChange={updateSliderWidthValue}
            name={"width"}
            value={objects.width}
          />
        </div>
        <div style={commonStyle}>
          Depth:
          <SliderComponent
            onValueChange={updateSliderDepthValue}
            name={"depth"}
            value={objects.depth}
          />
        </div>
        <div style={commonStyle}>
          X:
          <SliderComponent
            onValueChange={updateSliderXValue}
            name={"x"}
            value={objects.X}
          />
        </div>
        <div style={commonStyle}>
          Y:
          <SliderComponent
            onValueChange={updateSliderYValue}
            name={"y"}
            value={objects.Y}
          />
        </div>
      </div>
    </div>
  );
};
