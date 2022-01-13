import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Typography } from "@material-ui/core";
import "./buildFolder.css";

export const Folders = (props) => {
  const children = props.children;

  return (
    <div className="comments">
      <TreeItem
        label={
          <ListItem root component="a" href="#">
            <ListItemText primary={children && children.name} />
          </ListItem>
        }
      />
      {children &&
        children.map((folder) => (
          <div>
            <ListItem button component="a" href="#">
              <Typography className="element">{folder.name}</Typography>
            </ListItem>

            {folder.children && <Folders children={folder.children} />}
          </div>
        ))}
      <TreeItem
        label={
          <ListItem root component="a" href="#">
            <ListItemText primary={" "} />
          </ListItem>
        }
      />
    </div>
  );
};
