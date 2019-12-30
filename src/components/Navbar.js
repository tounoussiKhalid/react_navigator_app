import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navbar2 extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/about">About</Link>
            <Link className="nav-item nav-link" to="/articles">Articles</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar2;
