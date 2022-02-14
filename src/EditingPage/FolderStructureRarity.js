import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";
import { TreeView } from "@material-ui/lab";
import { FoldersRarity } from "./BuildFolderRarity";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 5,
  },
}));

export default function TreesTempRarity(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const treeData = props.folderData;

  return (
    <div className={classes.root} style={{ marginTop: "20px" }}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "monospace",
          color: "#fff",
        }}
      >
        Rarity Control
      </div>
      <List>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<IconButton />}
          defaultExpandIcon={<MenuIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <FoldersRarity children={treeData && treeData.children} />
        </TreeView>
      </List>
    </div>
  );
}
