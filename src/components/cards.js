import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/DeleteSweep";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import WarningIcon from "@mui/icons-material/Warning";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@material-ui/core/Divider";

const cards = (props) => {
  const handleDelete = (message) => {
    message.isDeleted = true;
    message.isFlagged = false;
    message.isSpammed = false;
    props.updateState(message);
  };
  const handleFlag = (message) => {
    if (message.isFlagged === true) {
      message.isFlagged = false;
      message.isSpammed = false;
      message.isDeleted = false;
      props.updateState(message);
    } else {
      message.isFlagged = true;
      message.isSpammed = false;
      message.isDeleted = false;
      props.updateState(message);
    }
  };
  const handleSpam = (message) => {
    if (message.isSpammed === true) {
      message.isSpammed = false;
      message.isFlagged = false;
      message.isDeleted = false;
      props.updateState(message);
    } else {
      message.isSpammed = true;
      message.isFlagged = false;
      message.isDeleted = false;
      props.updateState(message);
    }
  };
  // const changeBackground = (e) => {
  //   e.target.style.background = "chocolate";
  // };

  // const resetBackground = (e) => {
  //   e.target.style.background = "aliceblue";
  // };
  const renderMessages = (message) => {
    return message.isDeleted ? null : (
      <List
        sx={{ width: "100%", bgcolor: "background.paper", marginLeft: "20px" }}
        key={message.id}
        // onMouseOver={changeBackground}
        // onMouseOut={resetBackground}
      >
        <Divider />
        <ListItem
          alignItems="flex-start"
          button
          // style={{ backgroundColor: "aliceblue" }}
        >
          <ListItemText
            primary={message.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>{message.message}</div>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => handleDelete(message)}
                    >
                      <DeleteIcon color="action" />
                    </Link>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => handleFlag(message)}
                    >
                      <EmojiFlagsIcon color="action" />
                    </Link>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => handleSpam(message)}
                    >
                      <WarningIcon color="action" />
                    </Link>
                  </div>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  };

  return (
    <>
      {props.searchList.length > 0
        ? props.searchList.map(renderMessages)
        : props.data.map(renderMessages)}
    </>
  );
};

export default cards;
