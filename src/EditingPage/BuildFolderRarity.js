import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { TreeContext } from "./EditingPage";
import TreeItem from "@material-ui/lab/TreeItem";
import { Typography, TextField } from "@material-ui/core";
import "./buildFolder.css";

export const FoldersRarity = (props) => {
  const { dispatchMain } = React.useContext(TreeContext);
  const children = props.children;

  const handleRaritySet = (folderIndex, subfolderIndex, val) => {
    dispatchMain({
      type: "update",
      value: val,
      folderIndex: folderIndex,
      subfolderIndex: subfolderIndex,
    });
  };

  return (
    <div>
      {children &&
        children.map((folder, index1) => (
          <div>
            <ListItem key={index1} button component="a" href="#">
              <Typography
                className="rarityFolder"
                style={{ fontFamily: "monospace", fontWeight: "bold" }}
              >
                {folder.name.slice(0, 1).toUpperCase() + folder.name.slice(1)}
              </Typography>
            </ListItem>

            {folder.children.map((subfolder, index2) => (
              <div>
                <ListItem key={index2} button component="a" href="#">
                  <img
                    src={require(`.${subfolder.path.slice(15)}`)}
                    alt="item"
                    style={{ maxWidth: "40%" }}
                  />
                  <Typography
                    className="elementSubfolder"
                    style={{
                      fontFamily: "monospace",
                      maxWidth: "30%",
                    }}
                  >
                    {subfolder.name}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "monospace",
                      maxWidth: "10%",
                      marginLeft: "3%",
                      color: "rgb(172, 172, 172)",
                    }}
                  >
                    Rarity:
                  </Typography>
                  <div
                    style={{
                      width: "25%",
                      paddingLeft: "2%",
                      color: "#fff",
                    }}
                  >
                    <TextField
                      className="rarityText"
                      size="small"
                      variant="outlined"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="out of 100"
                      onBlur={(event) => {
                        handleRaritySet(index1, index2, event.target.value);
                      }}
                    />
                  </div>
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
