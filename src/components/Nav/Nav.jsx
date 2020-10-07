import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom"; 
import "./Nav.css";



function Nav() {
    const [isloggedIn, setisloggedin] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      token != null ? setisloggedin(true) : setisloggedin(false);
    }, [location]);

    const handleLogout = () => {
      window.localStorage.clear();
    };
  
    return (
        <nav>
          <Link to="/">Home</Link>
          {isloggedIn ? (
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/users">Create Account</Link>
          <Link to="/createprojects">Create Project</Link>
          <Link to="/createpledge">Create Pledge</Link>
        </nav>
      );
    }
    export default Nav;
