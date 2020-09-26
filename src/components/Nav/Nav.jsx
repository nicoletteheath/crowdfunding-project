import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/login"> Login</Link>
            <Link to="/users"> Create Account </Link>
        </nav>
    );
}

export default Nav;