import React, { Component } from 'react'
import { makeStyles, StylesProvider } from "@material-ui/core";
import { AppBar, Toolbar, IconButton, Typography, Avatar, Stack } from '@mui/material';
import Button from '@material-ui/core/Button';
import { View, Text, StyleSheet } from 'react-native';
//import MenuIcon from '@material-ui/icons/Menu';
//import transitions from '@material-ui/core/styles/transitions';
import logo from '../image/Logo (w_out UT).png'



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position='fixed' style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Button edge='start' startIcon={<Avatar size='large' src={logo} />} />

            <Stack direction='row' style={{ marginLeft: 'auto' }}>
              <Button variant="h6" className="click" href="/">
                HOME
              </Button>

              <Button variant="h6" href="/Events">
                EVENTS
              </Button>

              <Button variant="h6" href="/AboutUs">
                ABOUT US
              </Button>

              <Button variant="h6" href="/Members">
                MEMBERS
              </Button>

              <Button variant="h6" href="/PhotoGallery">
                PHOTO GALLERY
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </div >
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

});