import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Search from "./components/Search";
import MenuDetails from "./components/MenuDetails";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <h1>Yummy Treats</h1>
        <Navbar/>
      </div>

      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/Search" element={<Search/>}></Route>
        <Route exact path="/meal/:mealId" element={<MenuDetails/>}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;