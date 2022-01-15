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

  const editValues = (input1, input2) => {
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: input1.name,
      currentSlide: input1.value,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: input2.name,
      currentSlide: input2.value,
    });
  };

  return (
    <div style={{ paddingTop: "20px" }}>
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
          zIndex: 20,
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
          <Items
            onClick={setCurrentElement}
            files={props.folderStructure}
            hashedFolder={props.hashedElements}
          />
        </div>
      </div>
      <div
        style={{
          width: "15%",
          float: "right",
          borderRadius: "10px",
          zIndex: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "#efefef",
            height: "100vh",
            margin: "5px 0px 5px 5px ",
            padding: "5px",
            boxShadow:
              "-5px 2px 4px -1px rgb(0 0 0 / 20%), -5px 4px 5px 0px rgb(0 0 0 / 14%), -5px 1px 10px 0px rgb(0 0 0 / 12%)",
          }}
        >
          <div>
            <Editor currentValues={props.hashedElements} />
          </div>
          <div>
            <EditorInput setValues={editValues} />
          </div>
        </div>
      </div>
    </div>
  );
};
