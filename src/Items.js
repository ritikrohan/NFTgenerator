import React from "react";
import { Rnd } from "react-rnd";
import { ObjectSelection, ObjectContext } from "./App";

export const Items = (props) => {
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const { objects, dispatch1 } = React.useContext(ObjectContext);

  const multiplier = 10;

  console.log(selection);

  return (
    props.hashedFolder &&
    props.hashedFolder.map((file) => (
      <div onClick={() => props.onClick(`${file.name}`)}>
        <Rnd bounds="window" style={{ zIndex: file.depth }}>
          <img
            src={require(`.${file.path}`)}
            alt="x"
            style={{
              width: file.width * multiplier,
              height: file.height * multiplier,
            }}
          />
        </Rnd>
      </div>
    ))
  );
};
