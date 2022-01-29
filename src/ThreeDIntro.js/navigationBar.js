import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

// Exporting Default Navbar to the App.js File
export const NavHomePage = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar
        variant="dense"
        style={{
          zIndex: 10,
          backgroundColor: "#2b2b2b30",

          borderRadius: "10px",
          height: "25px",
        }}
      >
        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "monospace" }}
            onClick={() => {
              props.setInstructionsOpen(true);
            }}
          >
            HOME
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "monospace" }}
            onClick={() => {
              props.setContactOpen(true);
            }}
          >
            CONTACT
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h6"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "monospace" }}
            onClick={() => {
              props.setAboutOpen(true);
            }}
          >
            ABOUT US
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
