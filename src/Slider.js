import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./App";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(props.value);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const valueToChange = props.name;

  // const updateSliderValues = (event) => {
  //   const currentValues = objects.find((obj) => obj.name === selection.name);
  //   console.log("Curremt Values are 123213121 : ", currentValues);
  // };

  const changeValue = (event, newValue) => {
    setCurrentSlide(newValue);
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: valueToChange,
      currentSlide: currentSlide,
    });

    // window.addEventListener("dragend", updateSliderValues);
  };

  console.log(
    `The value of the current component ${selection.name} is `,
    objects
  );

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
