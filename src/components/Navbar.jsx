import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-link-container">
          <ul className="nav-link-items">
            <li className="nav-item nav-logo-container">
              <a className="nav-item">
                <img
                  src="/hackerrank_logo.svg fill.svg"
                  alt="hackerrank-logo"
                />
              </a>
              <h4 className="nav-heading nav-item">HackerRank</h4>
              <div className="nav-seperator nav-item">|</div>
            </li>
            <li className="nav-item">
              <a className=" nav-item" href="#">
                <span className="nav-links">Prepare</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="active nav-item">
                <span>Certify</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <span>Compete</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <span>Apply</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-buttons-container">
          <div className="search nav-item">
            <input type="text" placeholder="Search" className="search-box" />
          </div>
          <ul className="side-buttons-container">
            <li className="nav-item">
              <a href="#" className="btn-developers">
                Hiring developers?
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-login">Log In</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-signup">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
