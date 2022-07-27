import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Home />
        <Navbar/>
      </div>

      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;