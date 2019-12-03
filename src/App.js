import React,{Component} from "react";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home"
import About from "./pages/About"
import Articles from "./pages/Articles"
import "./styles.css";

class App extends Component {
  state={
    page: 'home'
  }

  handleNavClicks = (e) =>{
      const name = e.target.getAttribute("name");
      const newState = {
        page : name
      };

      this.setState( newState );

  }

  render(){
    return (
    <div className="App">
      <Navbar handleNavClicks= { (e) => this.handleNavClicks(e) }/>

      {this.state.page ==="home" ? <Home /> : 
      this.state.page ==="about" ? <About /> :
      <Articles />}
    </div>
  );
  }
}

export default App;
