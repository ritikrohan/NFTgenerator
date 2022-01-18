import React from "react";
import { SliderComponent } from "./Slider";
import { TextField } from "@material-ui/core";
import { NumberOfCopies, ObjectContext, ObjectSelection } from "./EditingPage";
import { Button, Input } from "@material-ui/core";

export const EditorInput = (props) => {
  // eslint-disable-next-line no-undef
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const commonStyle = {
    margin: "10px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };

  const handleFinalClick = () => {
    return input4 > 10000 ? null : props.setValues(input1, input2, input4);
  };

  const [input1, setInput1] = React.useState({ name: "height", value: null });
  const [input2, setInput2] = React.useState({ name: "width", value: null });
  //const [input3, setInput3] = React.useState({ name: "depth", value: null });
  const [input4, setInput4] = React.useState({ value: null });

  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "#dee2e7",
        padding: "7px",
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
        Manual Input
      </div>
      <div style={commonStyle}>
        <div style={{ fontWeight: "bolder", fontFamily: "monospace" }}>
          Height:
        </div>
        <div>
          <TextField
            size="small"
            variant="standard"
            inputProps={{ style: { textAlign: "center" } }}
            placeholder="(in px)"
            onChange={(event) => {
              setInput1({
                name: "height",
                value: JSON.parse(event.target.value),
              });
            }}
            onBlur={handleFinalClick}
          />
        </div>
      </div>
      <div style={commonStyle}>
        <div style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          Width:
        </div>

        <TextField
          size="small"
          variant="standard"
          inputProps={{ style: { textAlign: "center" } }}
          placeholder="(in px)"
          onChange={(event) => {
            setInput2({ name: "width", value: JSON.parse(event.target.value) });
          }}
          onBlur={handleFinalClick}
        />
      </div>

      <div style={commonStyle}>
        <div style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          Total Copies:
        </div>

        <TextField
          size="small"
          defaultValue={100}
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          margin="dense"
          variant="outlined"
          onChange={(event) => {
            setInput4({ value: JSON.parse(event.target.value) });
          }}
          error={input4.value > 10000}
          helperText={input4 > 10000 ? "Should be less than 10000" : ""}
          onBlur={handleFinalClick}
        />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button variant="contained" color="primary" onClick={handleFinalClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};
