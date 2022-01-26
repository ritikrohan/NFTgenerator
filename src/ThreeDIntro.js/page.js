import React, { Component } from "react";
import { NavHomePage } from "./navigationBar";
import "./style.css";
import data from "../traffic.json";

export const ThreeData = () => {
  return (
    <div>
      <div>
        <div className="stars" />
        <div className="twinkling" />
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div style={{ zIndex: 3 }}>
          <NavHomePage />
        </div>

        <div className="title" style={{ zIndex: 3, marginTop: "3vh" }}>
          <h3
            style={{
              zIndex: 3,
              fontFamily: "monospace",
              marginLeft: "80vw",
              backgroundColor: "#3d3d3d48",
              padding: "5px",
              borderRadius: "10px",
            }}
          >{`Total Users: ${data.TotalUsers}`}</h3>
          <h3
            style={{
              zIndex: 3,
              fontFamily: "monospace",
              marginLeft: "80vw",
              marginTop: "5px",
              backgroundColor: "#3d3d3d48",
              padding: "5px",
              borderRadius: "10px",
            }}
          >{`Total Items: ${data.TotalItems}`}</h3>
        </div>

        <div
          style={{
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="glitch"
            style={{
              zIndex: 3,
              marginTop: "5vh",
            }}
          >
            <span aria-hidden="true">Sick Alien</span>
            Sick Alien
            <span aria-hidden="true">Sick Alien</span>
          </p>
        </div>

        <div className="title" style={{ zIndex: 3, fontFamily: "monospace" }}>
          <h3
            style={{
              zIndex: 3,
              fontFamily: "monospace",
              fontSize: "30px",
            }}
          >
            NFT AUTOMATOR
          </h3>
        </div>

        <button
          className="nice"
          style={{ zIndex: 3, fontFamily: "monospace" }}
          onClick={(event) => (window.location.href = "/editing")}
        >
          Enter
        </button>
        <div style={{ zIndex: 3, display: "flex", justifyContent: "center" }}>
          <p
            className="homepageContent"
            style={{
              marginTop: "45vh",
              bottom: "0",
              zIndex: 3,
              fontFamily: "monospace",
              fontWeight: "400",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
          >
            A tool to take the pain of creating NFTs away from you.
          </p>
        </div>
        <img
          src={require("./Alien.png")}
          alt="AlienImage"
          className="imageBackground"
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};
