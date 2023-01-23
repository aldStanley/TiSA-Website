import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { AppBar, makeStyles } from "@material-ui/core";
import  { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import transitions from '@material-ui/core/styles/transitions';



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">About Us</Typography>
            <Button color="white" align="right">Events</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}