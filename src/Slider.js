import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./App";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(50);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const valueToChange = props.name;

  const changeValue = (event, newValue) => {
    const desiredObj = objects.find((obj) => selection.name === obj.name);
    desiredObj[valueToChange] = currentSlide;
    setCurrentSlide(newValue);
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
      min={1}
      max={10}
    />
  );
};
