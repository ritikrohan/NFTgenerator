import React from "react";
import { NavComponent } from "../EditingPage/Navbar";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import "./style.css";
import { ImageDimension } from "../Webpages";
import { MyDropzone } from "./Dropzone";
import axios from "axios";

export const Selection = () => {
  const handleClick = () => {
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
          Upload Files
        </h1>

        <div
          style={{
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
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              color: "#000",
            }}
          >
            Click below to Upload Files
          </div>
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
