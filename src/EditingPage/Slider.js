import React from "react";
import Slider from "@material-ui/core/Slider";
import { useState } from "react";
import { ObjectContext, ObjectSelection } from "./EditingPage";
import "./Slider.css";

export const SliderComponent = (props) => {
  const [currentSlide, setCurrentSlide] = useState(props.value);
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const valueToChange = props.name;

  const marks = [
    {
      value: 0,
    },
    {
      value: 20,
    },
    {
      value: 37,
    },
    {
      value: 50,
    },
    {
      value: 100,
    },
  ];

  const formatValue = (value) => {
    if (value < 20) {
      return "Common";
    }
    if (value >= 20 && value < 37) {
      return "Rare";
    }
    if (value >= 37 && value < 50) {
      return "Very Rare";
    }
    if (value >= 50 && value < 100) {
      return "Alien";
    }
    return "GodLike";
  };

  React.useEffect(() => {
    setCurrentSlide(props.value);
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
      min={0}
      max={1000}
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
