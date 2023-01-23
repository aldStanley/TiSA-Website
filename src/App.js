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
import oneOone from ".//image/101pic.png"
import bg from "./image/bg.png"
import bg2 from "./image/background.png"


function App() {
  return (
    <React.Fragment>
      <div style={{backgroundImage: `url(${bg2})`, backgroundRepeat:"no-repeat",backgroundSize:"contain", height:1056, width:1848}}>
      
      <Navbar />
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
