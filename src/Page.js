import React from "react";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { ObjectContext, ObjectSelection } from "./App";

export const Page = () => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });

    console.log("Current selection is", selection.name);
  };

  return (
    <div>
      <div
        style={{
          width: "10%",
          float: "left",
          backgroundColor: "#787878",
          height: "100vh",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        Hello World
      </div>
      <div
        style={{
          width: "70%",
          float: "left",
          height: "100vh",
          padding: "5px",
        }}
      >
        <div id="content">
          <Items onClick={setCurrentElement} />
        </div>
      </div>
      <div style={{ width: "20%", float: "right", borderRadius: "10px" }}>
        <Editor currentValues={objects} />
      </div>
    </div>
  );
};
