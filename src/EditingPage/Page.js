import React from "react";

import { Editor } from "./Editor";
import { Items } from "./Items";
import { NumberOfCopies, ObjectContext, ObjectSelection } from "./EditingPage";
import { EditorInput } from "./EditorInput";
import Trees from "./FolderStructure";
import TreesTemp from "./FolderStructure";
import { Button, Input } from "@material-ui/core";
import "./Page.css";
import { ModalComponent } from "./Modal";
import { ImageDimension } from "../Webpages";

export const Page = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const { total, dispatch3 } = React.useContext(NumberOfCopies);
  const [totalCopies, setTotalCopies] = React.useState({ value: 0 });
  const [open, setOpen] = React.useState(false);
  const { imageRatio, dispatchImageDimension } =
    React.useContext(ImageDimension);
  const [coord, setCoor] = React.useState({ x: 0, y: 0 });

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });
  };

  console.log("Image ratio now : ", imageRatio);

  const imageHeight = imageRatio.height;
  const imageWidth = imageRatio.width;

  var parentRef = React.useRef(null);

  const handleMouseOver = (e) => {
    const parent = parentRef.current.getBoundingClientRect();
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const positionX = rect.left - parent.left;
    const positionY = rect.top - parent.top;

    //console.log(`width: ${width}, position: ${positionX} , ${positionY}`);
    const values = { x: positionX, y: positionY };

    return values;
  };

  const setCoord = (event, file) => {
    const curr_Coor = handleMouseOver(event);

    dispatch2({
      type: "update",
      name: `${file.name}`,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: "x",
      currentSlide: curr_Coor.x,
    });
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: "y",
      currentSlide: curr_Coor.y,
    });

    setCoor({ x: curr_Coor.x, y: curr_Coor.y });
  };

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

      setTotalCopies({ value: input4.value });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
        <div id="content">
          <Items
            onClick={setCurrentElement}
            files={props.folderStructure}
            hashedFolder={props.hashedElements}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            setCoord={setCoord}
            parent={parentRef}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "rgba(110, 110, 110, 0.658)",
            color: "#fff",
            fontFamily: "monospace",
            marginTop: "-5vh",
            paddingRight: "5px",
          }}
        >
          {" "}
          <p>
            Selection: {selection.name} &nbsp; X: {coord.x} Y: {coord.y}
          </p>
        </div>
      </div>
      <div
        style={{
          width: "15%",
          float: "right",
          borderRadius: "10px",
          zIndex: 20,
          marginTop: "10px",
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
                onClick={
                  totalCopies && totalCopies.value > 10000 ? null : handleOpen
                }
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
