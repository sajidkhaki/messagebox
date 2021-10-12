import React from "react";
import "./styles.css";
import Drawer from "./components/drawer";
import Header from "./components/header";
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
      <Header />
    </div>
  );
};

export default App;
