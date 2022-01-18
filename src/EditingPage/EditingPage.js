import React from "react";
import { objectReducer, selectionReducer } from "./ObjectReducer";
import { Page } from "./Page";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavComponent } from "./Navbar";

export const ObjectContext = React.createContext();
export const ObjectSelection = React.createContext();

export const EditingPage = () => {
  const baseURL = "http://localhost:5000/getFolderTree";

  const [fileData, setFileData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  let selection = null;
  let objects = [];

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
    setFileData(data);
  };

  React.useEffect(() => {
    getTree();
  }, []);

  const subfoldersLength =
    fileData && fileData.children && fileData.children.length;

  const hashCodeElement = [];
  const pathList = [];

  for (let i = 0; i < subfoldersLength; i++) {
    fileData &&
      fileData.children &&
      pathList.push(fileData.children[i].children[0].path.slice(3));
  }

  for (let i = 0; i < subfoldersLength; i++) {
    hashCodeElement.push({
      name: fileData.children.length ? fileData.children[i].name : null,
      path: pathList[i],
    });
  }

  const getObjects = (files) => {
    const objects = [];

    subfoldersLength &&
      files &&
      files.map((obj) => {
        objects.push({
          name: obj.name,
          path: obj.path,
          height: 100,
          width: 100,
          depth: 0,
          x: 0,
          y: 0,
        });
      });
    return objects;
  };

  objects = getObjects(hashCodeElement);

  React.useEffect(() => {
    dispatch1({ type: "add", payload: objects });
    dispatch2({
      type: "update",
      name: hashCodeElement.length ? hashCodeElement[0].name : null,
    });
  }, [fileData]);

  selection = { name: hashCodeElement[0] };

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
        <CssBaseline>
          <div style={{ maxHeight: "20px", zIndex: 21 }}>
            <NavComponent />
          </div>
          <div style={{ margin: "2px" }}>
            <Page
              folderStructure={fileData}
              selection={selection}
              hashedElements={objects}
            />
          </div>
        </CssBaseline>
      </ObjectSelection.Provider>
    </ObjectContext.Provider>
  );
};
