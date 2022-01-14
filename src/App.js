import React from "react";
import { objectReducer, selectionReducer } from "./ObjectReducer";
import { Page } from "./Page";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavComponent } from "./Navbar";

export const ObjectContext = React.createContext();
export const ObjectSelection = React.createContext();

export const App = () => {
  const baseURL = "http://localhost:5000/getFolderTree";

  const [fileData, setFileData] = React.useState(null);

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
    console.log(fileData);
  };

  React.useEffect(() => {
    getTree();
  }, []);

  const subfoldersLength =
    fileData && fileData.children && fileData.children.length;

  const getRandomString = (length) => {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };

  const hashCodeElement = [];
  const pathList = [];

  for (let i = 0; i < subfoldersLength; i++) {
    fileData &&
      fileData.children &&
      pathList.push(fileData.children[i].children[0].path.slice(3));
  }

  console.log("pathlist", pathList);

  for (let i = 0; i < subfoldersLength; i++) {
    hashCodeElement.push({ name: getRandomString(4), path: pathList[i] });
  }

  console.log("the array is : ", hashCodeElement);

  const getObjects = (files) => {
    const objects = [];

    subfoldersLength &&
      files &&
      files.map((obj) => {
        objects.push({
          name: obj.name,
          path: obj.path,
          height: 10,
          width: 10,
          depth: 0,
          x: 0,
          y: 0,
        });
      });
    return objects;
  };

  objects = getObjects(hashCodeElement);

  console.log("the objects are: ", objects);

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
          <div style={{ maxHeight: "20px", zIndex: 1 }}>
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
