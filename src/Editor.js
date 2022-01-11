import React from "react";
import { SliderComponent } from "./Slider";
import { ObjectContext, ObjectSelection } from "./App";

export const Editor = (props) => {
  // eslint-disable-next-line no-undef
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const commonStyle = {
    margin: "20px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };

  const currentValues = React.useRef(
    props.currentValues.find((obj) => obj.name === selection.name)
  );

  React.useEffect(() => {
    currentValues.current = props.currentValues.find(
      (obj) => obj.name === selection.name
    );
  }, [props.currentValues, selection.name]);

  return (
    <div
      style={{
        backgroundColor: "#dee2e7",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "1px 3px 1px #acacaf",
      }}
    >
      <div style={{ justifyContent: "center", display: "flex" }}>Editor</div>

      <div style={commonStyle}>
        Height:
        <SliderComponent name={"height"} value={currentValues.current.height} />
      </div>
      <div style={commonStyle}>
        Width:
        <SliderComponent name={"width"} value={currentValues.current.width} />
      </div>
      <div style={commonStyle}>
        Depth:
        <SliderComponent
          marks={true}
          name={"depth"}
          value={currentValues.current.depth}
        />
      </div>
      {/* <div style={commonStyle}>
          X:
          <SliderComponent name={"x"} value={currentValues.current.X} />
        </div>
        <div style={commonStyle}>
          Y:
          <SliderComponent name={"y"} value={currentValues.current.Y} />
        </div> */}
    </div>
  );
};
