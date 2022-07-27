import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
          <nav className="navbar bg-light display-block ">
            <div className="container-fluid">
                {/* <ul className="navbar-nav"> */}
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signin">Signin</Link>
                        <Link className="nav-link" to="/signup">Signup</Link>
                {/* </ul> */}
            </div>
        </nav>
        </>
    );
};
export default Navbar;