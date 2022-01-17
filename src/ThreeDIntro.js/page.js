import React, { Component } from "react";
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

        <div className="title" style={{ zIndex: 10 }}>
          <h1>
            WELCOME
            <br />
            To
            <br />
            NFT AUTOMATOR
          </h1>
        </div>

        <div className="wrap" style={{ zIndex: 9 }}>
          {Array.apply(null, { length: 300 }).map((e, i) => (
            <div className="c" />
          ))}
        </div>

        <button className="nice" style={{ zIndex: 10 }}>
          Continue
        </button>
      </div>
    </div>
  );
};
