import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";

export const Folders = (props) => {
  const children = props.children;

  return (
    <div className="comments">
      {children &&
        children.map((folder) => (
          <div className="folder">
            <TreeItem label={folder.name} />
            {folder.children && <Folders children={folder.children} />}
          </div>
        ))}
    </div>
  );
};
