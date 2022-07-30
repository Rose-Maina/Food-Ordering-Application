import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import ShoppingList from "./components/ShoppingList";
import Signup from "./components/Signup";
import "./App.css"


function App() {
  return (
    <div className="App">
    <Router>
        <div>
        <h1>Yummy Treats</h1>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/Shoppinglist" element={<ShoppingList/>}></Route>
        </Routes>
        </div>
    </Router>
    </div>
   
  );
}

export default App;