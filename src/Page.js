import React from "react";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { ObjectContext, ObjectSelection } from "./App";
import { EditorInput } from "./EditorInput";
import CustomizedTreeView from "./FolderStructure";

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
        <CustomizedTreeView />
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
