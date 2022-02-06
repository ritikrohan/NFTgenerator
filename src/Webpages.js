import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { EditingPage } from "./EditingPage/EditingPage";
import { Fluidity } from "./LoadingPage/Fluidity";
import { ThreeData } from "./ThreeDIntro.js/page";
import "./EditingPage/styles.css";
import { Selection } from "./SelectionPage/Selection";

export const Webpages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ThreeData />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/editing" element={<EditingPage />} />
        <Route path="/loading" element={<Fluidity />} />
      </Routes>
    </Router>
  );
};
export default Webpages;
