import React, { useState, useEffect } from "react";

import Drawer from "./components/drawer";
import Main from "./components/main";
import Data from "./mock_data.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const App = () => {
  const [state, setstate] = useState([]);
  const [searchstate, setsearchstate] = useState([]);

  const updateState = (message) => {
    const currentState = [...state];

    let messageIndex = currentState.findIndex((item) => {
      return item.id === message.id;
    });
    currentState[messageIndex] = message;
    setstate(currentState);
  };

  const findValue = (key) => {
    if (!key) return;
    const currentState = [...state];
    let found = currentState.filter((i) => {
      return i.title === key;
    });
    if (found.length > 0) {
      setsearchstate(found);
    } else {
      setsearchstate([]);
    }
  };

  useEffect(() => {
    setstate(Data);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer data={state} />
      <Main
        data={state}
        updateState={updateState}
        findValue={findValue}
        searchList={searchstate}
      />
    </div>
  );
};

export default App;
