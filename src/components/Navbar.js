import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { AppBar, makeStyles } from "@material-ui/core";
import  { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import transitions from '@material-ui/core/styles/transitions';


//style={{ background: 'transparent', boxShadow: 'none'}}
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" > 
          <Toolbar>
            
            <ul className="navbar-nav align-items-center">
                    <li className="nav-item me-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
            <Typography variant="h6">About Us</Typography>
            <Button color="white" align="right">Events</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}