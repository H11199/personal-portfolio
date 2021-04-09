import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="menu-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              src="https://fontmeme.com/permalink/210407/752710090f6b44f6e04a287e0384502b.png"
              className="d-inline-block align-top"
              width="200"
              height="80"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav  ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/project">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link disabled" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
