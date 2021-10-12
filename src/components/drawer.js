import * as React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";



import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Flag from "@material-ui/icons/Flag";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import Warning from "@material-ui/icons/Warning";
const useStyles = makeStyles({ 
  drawer: {
    width: "380px",
  },
});

const Drawer = () => {
  const classes = useStyles();
  const itemList = [
    { text: "Inbox", icon: <InboxIcon /> },
    { text: "Flagged", icon: <Flag /> },
    { text: "Spam", icon: <Warning /> },
    { text: "Deleted", icon: <DeleteSweepIcon /> },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List className={classes.drawer}>
        {itemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text}>
              {icon && <ListItemIcon>{icon} </ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
