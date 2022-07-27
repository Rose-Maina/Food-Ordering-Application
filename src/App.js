import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Home />
        <Navbar/>
      </div>

      <Routes>
        <Route exact path="/" element={<About/>}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;