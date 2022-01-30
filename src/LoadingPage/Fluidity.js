import { Button } from "@material-ui/core";
import React, { Component } from "react";

import { NavComponent } from "../EditingPage/Navbar";

import "./style.css";

export const Fluidity = () => {
  const handleClick = (total) => {
    const baseURL = "https://localhost:8443/deleteFiles";
    const response = fetch(baseURL, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    });
  };
  return (
    <div className="trans">
      <div style={{ maxHeight: "20px", zIndex: 21 }}>
        <NavComponent />
      </div>

      <div
        style={{
          background: "#00000000",
          paddingTop: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="typewriter"
          style={{
            maxWidth: "71vw",
            maxHeight: "8vh",
          }}
        >
          <h2>Patience ... Awesome things on the way !&nbsp; </h2>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClick}
        >
          Download
        </Button>
      </div>
    </div>
  );
};
