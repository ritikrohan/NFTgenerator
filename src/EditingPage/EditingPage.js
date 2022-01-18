import React from "react";
import {
  objectReducer,
  selectionReducer,
  totalElementsReducer,
  TreeReducer,
} from "./ObjectReducer";
import { Page } from "./Page";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavComponent } from "./Navbar";
import axios from "axios";

export const ObjectContext = React.createContext();
export const ObjectSelection = React.createContext();
export const NumberOfCopies = React.createContext();
export const TreeContext = React.createContext();

export const EditingPage = () => {
  const baseURL = "http://localhost:8443/getFolderTree";

  const [fileData, setFileData] = React.useState(null);

  let selection = null;
  let objects = [];
  let total = { value: 100 };

  const getTree = async () => {
    const data = await axios.get(baseURL, {
      params: { uuid: JSON.parse(sessionStorage.uuid) },
    });
    //const data = await response.json();
    setFileData(data.data);
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
    dispatchMain({ type: "add", payload: fileData });
    dispatch1({ type: "add", payload: objects });
    dispatch2({
      type: "update",
      name: hashCodeElement.length ? hashCodeElement[0].name : null,
    });
  }, [fileData]);

  selection = { name: hashCodeElement[0] };
  total = { value: 100 };

  const [TreeState, dispatchMain] = React.useReducer(
    TreeReducer,
    fileData?.children
  );
  const [ObjectState, dispatch1] = React.useReducer(objectReducer, objects);
  const [SelectionState, dispatch2] = React.useReducer(
    selectionReducer,
    selection
  );
  const [NumberOfCopiesState, dispatch3] = React.useReducer(
    totalElementsReducer,
    total
  );

  return (
    <TreeContext.Provider value={{ fileData: TreeState, dispatchMain }}>
      <ObjectContext.Provider value={{ objects: ObjectState, dispatch1 }}>
        <ObjectSelection.Provider
          value={{ selection: SelectionState, dispatch2 }}
        >
          <NumberOfCopies.Provider
            value={{ total: NumberOfCopiesState, dispatch3 }}
          >
            <CssBaseline>
              <div style={{ maxHeight: "20px", zIndex: 21 }}>
                <NavComponent folderStructure={fileData} />
              </div>
              <div style={{ margin: "2px" }}>
                <Page
                  folderStructure={fileData}
                  selection={selection}
                  hashedElements={objects}
                />
              </div>
            </CssBaseline>
          </NumberOfCopies.Provider>
        </ObjectSelection.Provider>
      </ObjectContext.Provider>
    </TreeContext.Provider>
  );
};
