import React, { Component } from "react";
import { Button } from '@mui/material';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import Default from "./components/Default";
import Events from "./components/Events"
import Home from "./components/Home"
import Members from "./components/Members"
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery"
import bg from "./image/background pic.png"
import logo from "./image/bg2.png"



const App = () => {
  return (
    <div>
      <img src={bg} style={{ position: 'relative', width: "100vw" }} />
      <Button href="/" style={{ backgroundColor: 'transparent', position: 'absolute', width: '50vw', left: 0, right: 0, top: 75, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto' }}>
        <img src={logo} style={{ width: '50vw' }} />
      </Button>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/PhotoGallery" element={<PhotoGallery />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;