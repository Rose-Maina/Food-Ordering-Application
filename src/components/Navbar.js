import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
          <nav className="navbar bg-light display-block ">
            
            {/* <div className="container-fluid"> */}
                        {/* <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <Link className="nav-link" to="/signin">Signin</Link>
                        <Link className="nav-link" to="/signup">Signup</Link> */}
            {/* </div> */}
            <NavLink>
                
            </NavLink>
        </nav>
        </>
    );
};
export default Navbar;