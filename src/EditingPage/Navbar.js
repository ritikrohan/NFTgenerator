import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    primary: {
      main: "000",
    },
  },
}));

// Exporting Default Navbar to the App.js File
export const NavComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ color: "#212529" }}>
      <AppBar position="sticky" style={{ background: "rgb(16, 16, 32)" }}>
        <Toolbar variant="dense">
          <img
            style={{ maxWidth: "50px", float: "right" }}
            src={require("./AlienLogo.png")}
            alt="alien"
          />
          <Typography
            variant="h6"
            color="inherit"
            style={{
              fontFamily: "monospace",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
          >
            Sick Alien
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
