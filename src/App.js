import React, {Component} from "react";
import "./App.css";
import {Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import AboutUs from "./components/AboutUs"
import Default from "./components/Default";
import Events from "./components/Events"
import Home from "./components/Home"
import Members from "./components/Members"
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery"
import bg from "./image/101.png"



function App() {
  return (
    <React.Fragment>
      <div style={{backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"contain", height:1056, width:'100vw'}}>
      
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
