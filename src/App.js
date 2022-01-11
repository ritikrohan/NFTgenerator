import React from "react";
import axios from "axios";
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

  const baseURL = "http://localhost:5000/getFolderTree";

  const [post, setPost] = React.useState(null);

  const getTree = async () => {
    const response = await fetch(baseURL, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    });
    const data = await response.json();
    console.log("The recieved data is : ", data);
  };

  React.useEffect(() => {
    getTree();
  }, []);

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
