import React from "react";
import { NavComponent } from "../EditingPage/Navbar";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import "./style.css";

export const Selection = () => {
  const [input1, setInput1] = React.useState({ name: "height", value: null });
  const [input2, setInput2] = React.useState({ name: "width", value: null });

  return (
    <div>
      <NavComponent style={{ zIndex: 2 }} />
      <div className="area">
        <h1 style={{ fontFamily: "monospace", color: "#fff" }}>
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
            onClick={() => {
              window.location.href = "/editing";
            }}
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
