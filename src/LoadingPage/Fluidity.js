import React, { Component } from "react";

import { NavComponent } from "../EditingPage/Navbar";
import "./style.css";

export default class Fluidity extends Component {
  render() {
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
      </div>
    );
  }
}
