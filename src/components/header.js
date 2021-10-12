import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    AppBa:{
        height:"50px",
        background:"white"
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static"  className={classes.AppBa}>
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header
