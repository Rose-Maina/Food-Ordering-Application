import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav className="navbar bg-light display-block">
            <div className="container-fluid">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signup">Signup</Link> 
                        <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-sm btn-outline-secondary" type="button">Search</button>                        
                        </form>
            </div>  
        </nav>
        </>
    );
};
export default Navbar;