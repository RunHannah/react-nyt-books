import React, { Component } from "react";
import NytLogo from "../nyt-logo.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="navbar-fixed">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              <img src={NytLogo} className="nyt-logo" alt="logo" />
              <p className="nav-best">Best Sellers for Fiction</p>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
