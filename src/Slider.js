import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./App";
import "./Slider.css";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(props.value);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const valueToChange = props.name;

  React.useEffect(() => {
    setCurrentSlide(props.value);
    console.log("Value set to : ", props.value);
  }, [props.value]);

  const changeValue = (event, newValue) => {
    setCurrentSlide(newValue);
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: valueToChange,
      currentSlide: currentSlide,
    });
  };

  return !props.marks ? (
    <Slider
      value={currentSlide}
      valueLabelDisplay="auto"
      onChange={changeValue}
    />
  ) : (
    <Slider
      aria-label="Temperature"
      defaultValue={0}
      valueLabelDisplay="auto"
      value={currentSlide}
      onChange={changeValue}
      step={1}
      marks
      min={0}
      max={10}
    />
  );
};
