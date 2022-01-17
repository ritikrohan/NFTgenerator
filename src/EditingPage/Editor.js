import React from "react";
import { SliderComponent } from "./Slider";
import { ObjectContext, ObjectSelection } from "./EditingPage";

export const Editor = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const commonStyle = {
    margin: "10px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
    fontWeight: "bolder",
    fontFamily: "monospace",
  };

  const currentValues = React.useRef(
    props.currentValues.find((obj) => obj.name === selection.name)
  );

  React.useEffect(() => {
    currentValues.current =
      objects && objects.find((obj) => obj.name === selection.name);
  }, [objects, selection.name]);

  return (
    <div
      style={{
        backgroundColor: "#dee2e7",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "1px 3px 1px #acacaf",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "monospace",
        }}
      >
        Editor
      </div>

      <div style={commonStyle}>
        Height:
        <SliderComponent
          name={"height"}
          value={props.currentValues.length ? props.currentValues[0].height : 0}
        />
      </div>
      <div style={commonStyle}>
        Width:
        <SliderComponent
          name={"width"}
          value={props.currentValues.width ? props.currentValues[0].width : 0}
        />
      </div>
      <div style={commonStyle}>
        Depth:
        <SliderComponent
          marks={true}
          name={"depth"}
          value={props.currentValues.depth ? props.currentValues[0].depth : 0}
        />
      </div>
      {/* <div style={commonStyle}>
        Rarity:
        <SliderComponent
          marks={true}
          name={"rarity"}
          value={props.currentValues.rarity ? props.currentValues[0].rarity : 0}
        />
      </div> */}
    </div>
  );
};
