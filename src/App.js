import React from "react";
import GridLines from "react-gridlines";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { objectReducer, selectionReducer } from "./ObjectReducer";

export const ObjectContext = React.createContext();
export const ObjectSelection = React.createContext();

export const App = () => {
  const objects = [
    {
      name: "a",
      height: 100,
      width: 100,
      depth: 0,
      x: 0,
      y: 0,
    },
    {
      name: "b",
      height: 100,
      width: 100,
      depth: 0,
      x: 0,
      y: 0,
    },
  ];

  const selection = { name: "b" };

  const [ObjectState, dispatch1] = React.useReducer(objectReducer, objects);
  const [SelectionState, dispatch2] = React.useReducer(
    selectionReducer,
    selection
  );

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });
  };

  return (
    <ObjectContext.Provider value={{ objects: ObjectState, dispatch1 }}>
      <ObjectSelection.Provider
        value={{ selection: SelectionState, dispatch2 }}
      >
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
          <Editor />
        </div>
      </ObjectSelection.Provider>
    </ObjectContext.Provider>
  );
};
