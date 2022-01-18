import React from "react";

export const Error = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={require("./errorpage.png")} alt="Error 404" />
    </div>
  );
};
