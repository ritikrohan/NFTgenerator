import React, { Component } from "react";
import { NavHomePage } from "./navigationBar";
import "./style.css";
import "./style.scss";

export const ThreeData = () => {
  return (
    <div>
      <div className="page">
        <div className="stars" />
        <div className="twinkling" />
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div style={{ zIndex: 10 }}>
          <NavHomePage />
        </div>

        <div className="title" style={{ zIndex: 10, marginTop: "40vh" }}>
          <h1>NFT AUTOMATOR</h1>
        </div>

        <div className="wrap" style={{ zIndex: 9, marginTop: "-15vh" }}>
          {Array.apply(null, { length: 300 }).map((e, i) => (
            <div className="c" />
          ))}
        </div>

        <div style={{ zIndex: 10 }}>
          A tool to take the pain of creating NFTs away from you.
        </div>

        <button
          className="nice"
          style={{ zIndex: 10 }}
          onClick={(event) => (window.location.href = "/editing")}
        >
          Enter
        </button>
      </div>
    </div>
  );
};
