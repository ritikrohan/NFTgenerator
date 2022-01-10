import React from "react";

import { objectReducer, selectionReducer } from "./ObjectReducer";
import { Page } from "./Page";

export const ObjectContext = React.createContext();
export const ObjectSelection = React.createContext();

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

  const selection = { name: "b" };

  const [ObjectState, dispatch1] = React.useReducer(objectReducer, objects);
  const [SelectionState, dispatch2] = React.useReducer(
    selectionReducer,
    selection
  );

  return (
    <ObjectContext.Provider value={{ objects: ObjectState, dispatch1 }}>
      <ObjectSelection.Provider
        value={{ selection: SelectionState, dispatch2 }}
      >
        <Page />
      </ObjectSelection.Provider>
    </ObjectContext.Provider>
  );
};
