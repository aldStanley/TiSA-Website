import React, { Component } from 'react'
import { AppBar, makeStyles, StylesProvider } from "@material-ui/core";
import { Box } from '@mui/material';
import Button from '@material-ui/core/Button';
import {View, Text, StyleSheet} from 'react-native';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import transitions from '@material-ui/core/styles/transitions';
import UTButton from "./UTButton"



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}> 

          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            
          >
          <Button variant="h6" className="click" href="/">
              HOME
          </Button>

          <Button variant="h6" href="/Events">
              EVENTS
          </Button>

          <Button variant="h6" href="/AboutUs">
              ABOUTUS
          </Button>

          <Button variant="h6" href="/Members">
              MEMBERS
          </Button>

          <Button variant="h6" href="/PhotoGallery">
              PHOTO GALLERY
            </Button>
          </Box>
          <View style={styles.centered}>
            <UTButton/>
          </View>
        </AppBar>
      </div>
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