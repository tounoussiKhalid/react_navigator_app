import React, { Component } from "react";
import Navbar2 from "./components/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails.js";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {

  render() {
    return (
      <Router>
        <Navbar2 />

        <Switch>
          <Route path="/articles/:articleTitle"  component= {ArticleDetails } />
          <Route path="/about" component= {About}  />
          <Route path="/articles" component= {Articles} />
          <Route path="/" exact component= {Home}/>          
        </Switch>
      </Router>
    );
  }
}

export default App;
