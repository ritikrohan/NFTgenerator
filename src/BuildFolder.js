import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";

const commonStyle = {
  margin: "20px",
  backgroundColor: "#c1c9d1",
  padding: "5px",
  borderRadius: "10px",
  boxShadow: "1px 3px 1px #afafaf",
};

export const Folders = (props) => {
  const children = props.children;

  return (
    <div className="comments">
      <TreeItem
        label={
          <ListItem button component="a" href="#">
            <ListItemText primary={children && children.name} />
          </ListItem>
        }
        children={children}
      />
      {children &&
        children.map((folder) => (
          <div>
            <TreeItem label={folder.name} />
            {folder.children && <Folders children={folder.children} />}
          </div>
        ))}
    </div>
  );
};
