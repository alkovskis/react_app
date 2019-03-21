import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import "./AppBar.css";

const appbar = () =>
    <div id="root">
        <AppBar position="static">
            <Toolbar>
                <IconButton id="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon/>
                </IconButton>
                <Typography id="grow" variant="h6" color="inherit">
                    Menu
                </Typography>
            </Toolbar>
        </AppBar>
    </div>;

export default appbar;