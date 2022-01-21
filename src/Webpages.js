import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { EditingPage } from "./EditingPage/EditingPage";
import FinalPage from "./FInalPage/Glitch"; //NEED to Correct Later
import Fluidity from "./LoadingPage/Fluidity";
import { ThreeData } from "./ThreeDIntro.js/page";
import "./EditingPage/styles.css";

export const Webpages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ThreeData />} />
        <Route path="/editing" element={<EditingPage />} />
        <Route path="/loading" element={<Fluidity />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
};
export default Webpages;
