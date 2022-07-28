import React from "react";
import { Link } from "react-router-dom";
// import  Menu  from "./Menu";

const Navbar = () => {
    return (
        <>
          <nav className="navbar bg-light display-block ">
            <div className="container-fluid">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signup">Signup</Link> 
            </div>  
        </nav>
        </>
    );
};
export default Navbar;