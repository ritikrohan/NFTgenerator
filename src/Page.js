import React from "react";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { ObjectContext, ObjectSelection } from "./App";
import { EditorInput } from "./EditorInput";
import Trees from "./FolderStructure";
import TreesTemp from "./FolderStructureTemp";

export const Page = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });
  };

  console.log("The recieved data is : ", props.folderStructure);

  return (
    <div>
      <div
        style={{
          width: "15%",
          float: "left",
          backgroundColor: "#0a1929",
          height: "100vh",
          padding: "5px",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <TreesTemp folderData={props.folderStructure} />
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
      <div style={{ width: "15%", float: "right", borderRadius: "10px" }}>
        <div
          style={{
            backgroundColor: "#efefef",
            height: "100vh",
            margin: "5px",
            padding: "5px",
          }}
        >
          <div>
            <Editor currentValues={objects} />
          </div>
          <div>
            <EditorInput />
          </div>
        </div>
      </div>
    </div>
  );
};
