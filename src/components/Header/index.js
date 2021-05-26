import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      {/* Bootstramp "container" class has margins on the sides */}
      <div className="container">
        
        <Link id="name" className="navbar-brand" to="/">
          John Drenth
        </Link>
    
        <div className="collapse navbar-collapse" id="navbarPortfolio">
            <ul className="navbar-nav ml-auto">
    
                {/* The links in the navbar */}
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                    }
                  >
                    Portfolio
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    to="/contact"
                    className={window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                    }
                  >
                    Contact
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/about"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    About
                  </Link>
                </li>
            </ul>
        </div>

      </div>
    </nav>    
  );
}

export default Header;
