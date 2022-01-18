import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NumberOfCopies, ObjectContext, ObjectSelection } from "./EditingPage";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Typography } from "@material-ui/core";
import "./buildFolder.css";

export const Folders = (props) => {
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);
  const children = props.children;
  let folderStructure = [];

  const handleClick = (folder, subfolder) => {
    //console.log(objects, "folder: ", folder, subfolder, "index: ", index);
    dispatch1({
      type: "update",
      nameToFind: folder,
      valueToChange: "path",
      currentSlide: subfolder.path.slice(3),
    });
  };

  // console.log(folderStructure);

  return (
    <div>
      {children &&
        children.map((folder, index1) => (
          <div>
            <ListItem key={index1} button component="a" href="#">
              <Typography
                style={{ backgroundColor: "#102841" }}
                className="element"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                style={{
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                {folder.name.slice(0, 1).toUpperCase() + folder.name.slice(1)}
              </Typography>
            </ListItem>

            {folder.children.map((subfolder, index2) => (
              <div onClick={() => handleClick(folder.name, subfolder)}>
                <ListItem key={index2} button component="a" href="#">
                  <Typography
                    className="elementSubfolder"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >
                    {subfolder.name}
                  </Typography>
                </ListItem>
              </div>
            ))}
            <TreeItem
              nodeId="1"
              label={
                <ListItem root component="a" href="#">
                  <Typography styles={{ backgroundColor: "#034b92" }}>
                    {" "}
                  </Typography>
                </ListItem>
              }
            />
          </div>
        ))}
    </div>
  );
};
