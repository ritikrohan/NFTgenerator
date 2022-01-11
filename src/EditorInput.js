import React from "react";
import { SliderComponent } from "./Slider";
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
        Height:
        <Input />
      </div>
      <div style={commonStyle}>
        Width:
        <Input />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
};
