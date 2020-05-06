import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        PropertyForYou
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/property/4">
              View property
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sell">
              sell
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
