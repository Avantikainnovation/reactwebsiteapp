
// import './App.css';
// import images from './Images/fwr1.jpg'
// import image from './Images/mg2.jpg'
import React from "react";
import Home from "./Home";
import Header from "../components/Header";
import NoPage from "../components/NoPage";
import AboutFlower from "../components/AboutFlower";
import Whychoose from "../components/Whychoose";
import Gallery from "../components/Gallery";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/aboutflower" element={<AboutFlower />} />
          <Route path="/whychoose" element={<Whychoose />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;
