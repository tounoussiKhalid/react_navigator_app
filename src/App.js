import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    page: "home"
  };

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
