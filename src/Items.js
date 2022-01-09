import React from "react";
import { Rnd } from "react-rnd";
import { ObjectSelection, ObjectContext } from "./App";

export const Items = () => {
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const { objects, dispatch1 } = React.useContext(ObjectContext);

  let currentValues;

  const updateSliderValues = (event) => {
    currentValues = objects.find((obj) => obj.name === selection.name);
    console.log("Curremt Values are 123213121 : ", currentValues);
  };

  const setCurrentElement = (val) => {
    dispatch2({
      type: "update",
      name: val,
    });

    window.addEventListener("dragend", updateSliderValues);
  };

  const multiplier = 10;

  return (
    <div>
      <div onClick={() => setCurrentElement("a")}>
        <Rnd bounds="window" style={{ zIndex: objects[0].depth }}>
          <img
            src={require("./layers/ball/red eye ball_sr.png")}
            alt="x"
            style={{
              width: objects[0].width * multiplier,
              height: objects[0].height * multiplier,
            }}
          />
        </Rnd>
      </div>
      <div onClick={() => setCurrentElement("b")}>
        <Rnd bounds="window" style={{ zIndex: objects[1].depth }}>
          <img
            style={{
              width: objects[1].width * multiplier,
              height: objects[1].height * multiplier,
            }}
            src={require("./layers/iris/large.png")}
            alt="x"
          />
        </Rnd>
      </div>
    </div>
  );
};
