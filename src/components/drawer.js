/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Flag from "@material-ui/icons/Flag";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Warning from "@material-ui/icons/Warning";

const useStyles = makeStyles({
  drawer: {
    width: "280px",
  },
});

const Drawer = (props) => {
  let [count, setCount] = useState({
    deleteCount: 0,
    spamCount: 0,
    flagCount: 0,
  });

  useEffect(() => {
    const deleteCount = props.data.filter((i) => {
      return i.isDeleted && !i.isSpammed && !i.isFlagged;
    });

    const spamCount = props.data.filter((i) => {
      return i.isSpammed && !i.isDeleted && !i.isFlagged;
    });

    const flagCount = props.data.filter((i) => {
      return i.isFlagged && !i.isDeleted && !i.isSpammed;
    });
    setCount({
      deleteCount: deleteCount.length,
      spamCount: spamCount.length,
      flagCount: flagCount.length,
    });
  }, [props.data]);
  const classes = useStyles();
  const itemList = [
    { text: "Inbox", icon: <InboxIcon /> },
    { text: "Flagged", icon: <Flag />, count: count.flagCount },
    { text: "Spam", icon: <Warning />, count: count.spamCount },
    { text: "Deleted", icon: <DeleteSweepIcon />, count: count.deleteCount },
  ];

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List className={classes.drawer}>
        {itemList.map((item) => {
          const { text, icon, count } = item;
          return (
            <ListItem button key={text}>
              {icon && <ListItemIcon>{icon} </ListItemIcon>}
              <ListItemText primary={text} />
              {count ? (
                <Badge badgeContent={count} color="secondary"></Badge>
              ) : null}
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
