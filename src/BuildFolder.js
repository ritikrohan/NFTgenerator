import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import { Typography } from "@material-ui/core";

const commonStyle = {
  margin: "0px",
  alignItems: "center",
  lineHeight: 1.5,
  letterSpacing: "0px",
  fontFamily:
    "IBM Plex Sans -apple-system BlinkMacSystemFont Segoe UI Roboto Helvetica Neue Arial sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol",
  fontWeight: 500,
  display: "x",
  borderRadius: "5px",
  outline: "0px",
  width: "100%",
  paddingTop: "5px",
  paddingBottom: "5px",
  justifyContent: "flex-start",
  transition:
    "color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  fontSize: "0.875rem",
  color: "#b2bac2",
  paddingLeft: "31px",
};

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
              <Typography style={commonStyle}>{folder.name}</Typography>
            </ListItem>

            {folder.children && <Folders children={folder.children} />}
          </div>
        ))}
    </div>
  );
};
