import React from "react";
import { NavComponent } from "../EditingPage/Navbar";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import "./style.css";
import { ImageDimension } from "../Webpages";
import { MyDropzone } from "./Dropzone";
import axios from "axios";

export const Selection = () => {
  const [input1, setInput1] = React.useState({ name: "height", value: 400 });
  const [input2, setInput2] = React.useState({ name: "width", value: 400 });
  const { imageRatio, dispatchImageDimension } =
    React.useContext(ImageDimension);

  const handleClick = () => {
    dispatchImageDimension({
      type: "update",
      value: { height: input1.value, width: input2.value },
    });

    window.location.href = "/editing";
  };

  return (
    <div>
      <NavComponent style={{ zIndex: 2 }} />
      <div className="area">
        <h1
          style={{
            fontFamily: "monospace",
            color: "#fff",
          }}
        >
          Image Dimension
        </h1>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#1313133b",
            marginRight: "40vw",
            marginLeft: "40vw",
            borderRadius: "10px",
          }}
        >
          <div style={{ margin: "10px" }}>
            <p style={{ fontFamily: "monospace", color: "#fff" }}>Height: </p>

            <TextField
              size="small"
              variant="outlined"
              inputProps={{ style: { textAlign: "center" } }}
              placeholder="(Px)"
              defaultValue={400}
              onChange={(event) => {
                setInput1({
                  name: "height",
                  value: JSON.parse(event.target.value),
                });
              }}
              style={{ zIndex: 2, fontFamily: "monospace", color: "#fff" }}
            />
          </div>

          <div style={{ margin: "10px" }}>
            <p style={{ fontFamily: "monospace", color: "#fff" }}>Width: </p>
            <div>
              <TextField
                size="small"
                variant="outlined"
                inputProps={{ style: { textAlign: "center" } }}
                placeholder="(Px)"
                defaultValue={400}
                onChange={(event) => {
                  setInput2({
                    name: "width",
                    value: JSON.parse(event.target.value),
                  });
                }}
                style={{ zIndex: 2, fontFamily: "monospace", color: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "40vw",
            marginLeft: "30vw",
            height: "50vh",
            backgroundColor: "#1313133b",
            marginTop: "10px",
            zIndex: 2,
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Upload Files
          <MyDropzone />
        </div>

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "50px",
            paddingBottom: "10px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleClick}
            style={{ zIndex: 2 }}
          >
            Continue
          </Button>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
