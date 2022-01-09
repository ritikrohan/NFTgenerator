import React from "react";
import GridLines from "react-gridlines";
import { Rnd } from "react-rnd";
import { Editor } from "./Editor";
import objectReducer from "./ObjectReducer";

const ObjectContext = React.createContext();

export const App = () => {
  const objects = [
    {
      name: "a",
      height: 10,
      width: 10,
      depth: 0,
      x: 0,
      y: 0,
    },
    {
      name: "b",
      height: 10,
      width: 10,
      depth: 0,
      x: 0,
      y: 0,
    },
  ];

  const [ObjectState, dispatch] = React.useReducer(objectReducer, objects);

  return (
    <ObjectContext.Provider value={{ objects: ObjectState, dispatch }}>
      <div
        style={{
          width: "10%",
          float: "left",
          backgroundColor: "#cdcdcd",
          height: "100vh",
          padding: "5px",
        }}
      >
        Hello World
      </div>
      <div style={{ width: "70%", float: "left", height: "100vh" }}>
        <GridLines
          className="grid-area"
          cellWidth={60}
          strokeWidth={2}
          cellWidth2={12}
        >
          <div
            style={{
              width: "800px",
              height: "400px",
            }}
          >
            <Rnd bounds="window" style={{ zIndex: 0 }}>
              <img src={require("./layers/ball/red eye ball_sr.png")} alt="x" />
            </Rnd>
          </div>
          <div
            style={{
              width: "800px",
              height: "400px",
            }}
          >
            <Rnd bounds="window" style={{ zIndex: 1 }}>
              <img src={require("./layers/iris/large.png")} alt="x" />
            </Rnd>
          </div>
        </GridLines>
      </div>
      <div style={{ width: "20%", float: "right" }}>
        <Editor />
      </div>
    </ObjectContext.Provider>
  );
};
