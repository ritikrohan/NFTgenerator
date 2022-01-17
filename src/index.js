import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.js";

import "./styles.css";
import { ThreeData } from "./ThreeDIntro.js/page.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<ThreeData />, rootElement);
