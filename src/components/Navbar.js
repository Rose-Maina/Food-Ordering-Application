import React from "react";
import ShoppingList from "./ShoppingList";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Shoppinglist">Shopping List</Link>                                                              ,
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Signup">Signup</Link> 
                </li>
            </ul>
    </div>
  </div>
</nav>
        </>
    );
};
export default Navbar;