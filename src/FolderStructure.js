import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 5,
  },
}));

export default function Trees() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <List>
        <div>
          {/* Tree Structure */}
          <TreeView>
            <TreeItem
              nodeId="1"
              label={
                <ListItem button component="a" href="#">
                  <ListItemText primary="Home" />
                </ListItem>
              }
            ></TreeItem>
            <TreeItem
              nodeId="2"
              label={
                <ListItem button component="a" href="#">
                  <ListItemText primary="Data Structures" />
                </ListItem>
              }
            >
              <TreeItem
                nodeId="6"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Arrays" />
                  </ListItem>
                }
              ></TreeItem>
              <TreeItem
                nodeId="7"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Linked List" />
                  </ListItem>
                }
              ></TreeItem>
            </TreeItem>
            <TreeItem
              nodeId="3"
              label={
                <ListItem button component="a" href="#">
                  <ListItemText primary="Algortihms" />
                </ListItem>
              }
            >
              <TreeItem
                nodeId="8"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Searching" />
                  </ListItem>
                }
              ></TreeItem>
              <TreeItem
                nodeId="9"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Sorting" />
                  </ListItem>
                }
              ></TreeItem>
            </TreeItem>
            <TreeItem
              nodeId="4"
              label={
                <ListItem button component="a" href="#">
                  <ListItemText primary="Languages" />
                </ListItem>
              }
            >
              <TreeItem
                nodeId="10"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="C++" />
                  </ListItem>
                }
              ></TreeItem>
              <TreeItem
                nodeId="11"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Java" />
                  </ListItem>
                }
              ></TreeItem>
              <TreeItem
                nodeId="12"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="Python" />
                  </ListItem>
                }
              ></TreeItem>
              <TreeItem
                nodeId="13"
                label={
                  <ListItem button component="a" href="#">
                    <ListItemText primary="JavaScript" />
                  </ListItem>
                }
              ></TreeItem>
            </TreeItem>
            <TreeItem
              nodeId="5"
              label={
                <ListItem button component="a" href="#">
                  <ListItemText primary="GBlog" />
                </ListItem>
              }
            ></TreeItem>
          </TreeView>
        </div>
      </List>
    </div>
  );
}
