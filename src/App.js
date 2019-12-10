import React, { Component } from "react";
import Navbar2 from "./components/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArticleDetails from "./pages/ArticleDetails.js";
class App extends Component {

  render() {
    return (
      <Router>
        <Navbar2 />

        <Switch>
          <Route path="/articles/:articleTitle"  component= {ArticleDetails } />
          <Route path="/about" component= {About}  />
          <Route path="/articles" component= {Articles} />
          <Route path="/" component= {Home}/>          
        </Switch>
      </Router>
    );
  }
}

export default App;
