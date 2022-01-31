import React from "react";
import { NavComponent } from "../EditingPage/Navbar";
import { Button } from "@material-ui/core";

export const Selection = () => {
  const handleClick = () => {
    window.location.href = "/editing";
  };
  return (
    <div>
      <NavComponent />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClick}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
