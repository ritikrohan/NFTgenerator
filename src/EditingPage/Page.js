import React from "react";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { NumberOfCopies, ObjectContext, ObjectSelection } from "./EditingPage";
import { EditorInput } from "./EditorInput";
import Trees from "./FolderStructure";
import TreesTemp from "./FolderStructureTemp";
import { Button, Input } from "@material-ui/core";
import "./Page.css";
import { ModalComponent } from "./Modal";

export const Page = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const { total, dispatch3 } = React.useContext(NumberOfCopies);
  const [open, setOpen] = React.useState(false);
  const [imageHeight, setImageHeight] = React.useState(400);
  const [imageWidth, setImageWidth] = React.useState(400);
  const [coord, setCoor] = React.useState({ x: 0, y: 0 });

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });
  };

  const setCoord = (event, file) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    console.log("Window Dimensions: ", windowHeight, windowWidth);

    const initialX = (windowWidth - imageWidth) / 2;
    const initialY = (windowHeight - imageHeight) / 2;

    console.log("Initial Dimensions: ", initialX, initialY);

    dispatch2({
      type: "update",
      name: `${file.name}`,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: "x",
      currentSlide: event.x - initialX,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: "y",
      currentSlide: event.y - initialY,
    });

    console.log("Final Dimensions: ", event.x - initialX, event.y - initialY);

    setCoor({ x: event.x - initialX, y: event.y - initialY });
  };

  React.useEffect(() => {});

  const editValues = (input1, input2, input3, input4) => {
    if (input1.value) {
      dispatch1({
        type: "update",
        nameToFind: selection.name,
        valueToChange: input1.name,
        currentSlide: input1.value,
      });
    }

    if (input2.value) {
      dispatch1({
        type: "update",
        nameToFind: selection.name,
        valueToChange: input2.name,
        currentSlide: input2.value,
      });
    }

    if (input3.value) {
      dispatch1({
        type: "update",
        nameToFind: selection.name,
        valueToChange: input3.name,
        currentSlide: input3.value,
      });
    }

    if (input4.value) {
      dispatch3({
        type: "update",
        value: input4.value,
      });
    }

    console.log("value: ", total);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <div
        style={{
          width: "15%",
          float: "left",
          backgroundColor: "rgb(23, 23, 44)",
          height: "100vh",
          padding: "5px",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "auto",
          zIndex: 20,
          transition: "width .35s",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(110, 110, 110, 0.658)",
            color: "#fff",
            fontFamily: "monospace",
          }}
        >{`Current Selection: ${selection.name}`}</div>

        <div id="content">
          <Items
            onClick={setCurrentElement}
            files={props.folderStructure}
            hashedFolder={props.hashedElements}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            setCoord={setCoord}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "rgba(110, 110, 110, 0.658)",
            color: "#fff",
            fontFamily: "monospace",
            marginTop: "-9vh",
            paddingRight: "5px",
          }}
        >{`X: ${coord.x}     Y: ${coord.y}`}</div>
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
          <div
            style={{
              marginTop: "15px",
              padding: "5px",
            }}
          >
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleOpen}
              >
                Generate
              </Button>
            </div>
            <div>
              <ModalComponent isOpen={open} handleClose={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
