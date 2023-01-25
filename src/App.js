import React, {Component} from "react";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import AboutUs from "./components/AboutUs"
import Default from "./components/Default";
import Events from "./components/Events"
import Home from "./components/Home"
import Members from "./components/Members"
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery"
import bg2 from "./image/101.png"
import UT from "./image/bg2.png";
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import { Box } from '@mui/material';


function App() {
  return (
    <React.Fragment>
      <div style={{backgroundImage: `url(${bg2})`, backgroundRepeat:"no-repeat",backgroundSize:"contain", height:1056, width:'100vw'}}>
      
      <Navbar />
      <Box
        sx={{
          maxHeight:500,
        }}>
        <Button href="/">
          <img src={UT}/>
        </Button>
      </Box>
    

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Members" element={<Members/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/PhotoGallery" element={<PhotoGallery/>}/>
        <Route path="*" element={<Default/>} />
      </Routes>
      </div>
      
      
      
    </React.Fragment>
  );
}

export default App;
