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
import { Fluidity } from "./LoadingPage/Fluidity";
import { ThreeData } from "./ThreeDIntro.js/page";
import "./EditingPage/styles.css";
import { Selection } from "./SelectionPage/Selection";

import { imageDimensionReducer } from "./Reducer";

export const ImageDimension = React.createContext();

export const Webpages = () => {
  const imageDimension = { height: 400, width: 400 };

  const [imageDimensionState, dispatchImageDimension] = React.useReducer(
    imageDimensionReducer,
    imageDimension
  );

  return (
    <ImageDimension.Provider
      value={{ imageRatio: imageDimensionState, dispatchImageDimension }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<ThreeData />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/editing" element={<EditingPage />} />
          <Route path="/loading" element={<Fluidity />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </Router>
    </ImageDimension.Provider>
  );
};
export default Webpages;
