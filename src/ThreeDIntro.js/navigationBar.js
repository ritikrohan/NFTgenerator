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
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

// Exporting Default Navbar to the App.js File
export const NavHomePage = () => {
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
          backgroundColor: "#2b2b2b98",
          marginRight: "10vw",
          marginTop: "2vh",
          borderRadius: "10px",
          height: "25px",
        }}
      >
        <div className="eachOne">
          <Typography
            variant="h5"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            HOME
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h5"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            CONTACT
          </Typography>
        </div>

        <div className="eachOne">
          <Typography
            variant="h5"
            color="inherit"
            className="landingNavMenu"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            ABOUT US
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
