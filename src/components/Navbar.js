import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">Home</li>
            <li class="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
