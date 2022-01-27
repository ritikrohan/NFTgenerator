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
          <Typography
            variant="h6"
            color="inherit"
            style={{
              fontFamily: "monospace",
              animation: "glow 2s ease-in-out infinite alternate",
              marginLeft: "0.5vw",
            }}
            onClick={(event) => (window.location.href = "/")}
          >
            NFT Automator
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            style={{
              fontFamily: "monospace",
              animation: "glow 2s ease-in-out infinite alternate",
              marginLeft: "75.5vw",
            }}
          >
            <p>Sick Alien&nbsp;</p>
            <span></span>
          </Typography>

          <img
            style={{ maxWidth: "50px", marginLeft: "0.5vw" }}
            src={require("./AlienLogo.png")}
            alt="alien"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
