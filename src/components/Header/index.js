import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      {/* Bootstramp "container" class has margins on the sides */}
      <div className="container">
        
        <NavLink id="name" className="navbar-brand" to="/">
          John Drenth
        </NavLink>
    
        <div className="collapse navbar-collapse" id="navbarPortfolio">
            <ul className="navbar-nav ml-auto">
    
                {/* The links in the navbar */}
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    className="nav-link"
                    activeClassName="nav-link active"
                    // className={window.location.pathname === "/portfolio"
                    //   ? "nav-link active"
                    //   : "nav-link"
                    // }
                  >
                    Portfolio
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="nav-link active"
                    // className={
                    //   window.location.pathname === "/" || window.location.pathname === "/about"
                    //     ? "nav-link active"
                    //     : "nav-link"
                    // }
                  >
                    About
                  </NavLink>
                </li>
            </ul>
        </div>

      </div>
    </nav>    
  );
}

export default Header;
