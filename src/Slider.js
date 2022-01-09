import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./App";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(props.value);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const valueToChange = props.name;

  const changeValue = (event, newValue) => {
    setCurrentSlide(newValue);
    dispatch1({
      type: "update",
      nameToFind: selection.name,
      valueToChange: valueToChange,
      currentSlide: currentSlide,
    });
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
