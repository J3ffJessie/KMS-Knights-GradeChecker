import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ff6900",
  },
  title: {
    flexGrow: 1,
    color: "#000080",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    fontSize: "4rem",
    textShadow:
      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000",
    fontFamily: "Rye, cursive",
  },
}));

const linkStyle = {
  color: "#000080",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  paddingBottom: "5px",
  fontSize: "1.35rem",
};

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            Cobras
          </Typography>
        </Toolbar>
        <Link to="/" style={linkStyle}>
          Grade Calculator{" "}
        </Link>
        {/* <Link to="/finalgrade" style={linkStyle}>
          Algebra Final
        </Link> */}
      </AppBar>
    </div>
  );
}
