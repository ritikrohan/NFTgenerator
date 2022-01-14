import React from "react";
import { SliderComponent } from "./Slider";
import { TextField } from "@material-ui/core";
import { ObjectContext, ObjectSelection } from "./App";
import { Button, Input } from "@material-ui/core";

export const EditorInput = (props) => {
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

  const [input1, setInput1] = React.useState({ name: "height", value: null });
  const [input2, setInput2] = React.useState({ name: "width", value: null });

  const editValues = (input1, input2) => {
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: input1.name,
      currentSlide: input1.value,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: input2.name,
      currentSlide: input2.value,
    });
  };

  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "#dee2e7",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "1px 3px 1px #acacaf",
      }}
    >
      <div style={commonStyle}>
        <div style={{ fontWeight: "bolder", fontFamily: "monospace" }}>
          Height:
        </div>
        <div>
          <TextField
            variant="outlined"
            onChange={(event) => {
              setInput1({ value: event.target.value });
            }}
          />
        </div>
      </div>
      <div style={commonStyle}>
        <div style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          {" "}
          Width:
        </div>

        <TextField
          variant="outlined"
          onChange={(event) => {
            setInput2({ value: event.target.value });
          }}
        />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editValues(input1, input2)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
