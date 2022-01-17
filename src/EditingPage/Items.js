import React from "react";
import { Rnd } from "react-rnd";
import { ObjectSelection, ObjectContext } from "./App";
import "./Items.css";

export const Items = (props) => {
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const { objects, dispatch1 } = React.useContext(ObjectContext);

  let elements = props.hashedFolder;
  if (objects && objects.length) {
    elements = objects;
  }

  return (
    elements &&
    elements.map((file, index) => (
      <div onClick={() => props.onClick(`${file.name}`)}>
        <Rnd
          key={index}
          bounds="window"
          style={{ zIndex: file.depth }}
          onDragStop={(event) => {
            dispatch2({
              type: "update",
              name: `${file.name}`,
            });
            dispatch1({
              type: "update",
              nameToFind: selection.name,
              valueToChange: "x",
              currentSlide: event.x,
            });
            dispatch1({
              type: "update",
              nameToFind: selection.name,
              valueToChange: "y",
              currentSlide: event.y,
            });
          }}
        >
          <img
            src={require(`.${file.path}`)}
            alt="x"
            style={{
              width: file.width,
              height: file.height,
            }}
            className="items"
          />
        </Rnd>
      </div>
    ))
  );
};
