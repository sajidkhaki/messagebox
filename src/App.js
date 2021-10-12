import React from "react";
import "./styles.css";
import Drawer from "./components/drawer";
import Main from "./components/main";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Main/>
    </div>
  );
};

export default App;
