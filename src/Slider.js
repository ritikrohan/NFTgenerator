import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./App";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(50);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const changeValue = (event, newValue) => {
    props.onValueChange(newValue);
    setCurrentSlide(newValue);
  };

  return <Slider value={currentSlide} onChange={changeValue} />;
};
