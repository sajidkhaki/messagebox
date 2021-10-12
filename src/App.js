import React, { useState, useEffect } from "react";
import "./styles.css";
import Drawer from "./components/drawer";
import Main from "./components/main";
import Data from "./mock_data.json"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = () => {

  const [state, setstate] = useState([]);

  console.log("start state", state)


  const updateState = (message) => {

    const currentState = [...state]

    let messageIndex = currentState.findIndex((item) => {
      return item.id === message.id
    })
    currentState[messageIndex] = message
    setstate(currentState)
  }

  useEffect(() => {
    setstate(Data)
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer data = {state} />
      <Main data={state} updateState={updateState} />
    </div>
  );
};

export default App;
