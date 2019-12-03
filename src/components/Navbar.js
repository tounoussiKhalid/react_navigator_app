
import React,{Component} from 'react';
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component{

    render(){
        return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">

    
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a  name="home" class="nav-link" href="#" onClick={ (e) => this.props.handleNavClicks(e) }>Home </a>
          </li>
          <li class="nav-item">
            <a name="about" class="nav-link" href="#" onClick={ (e) => this.props.handleNavClicks(e) }>About</a>
          </li>
          <li class="nav-item">
            <a name="articles" class="nav-link" href="#" onClick={ (e) => this.props.handleNavClicks(e) }>Articles</a>
          </li>
        </ul>
      </div>
    </nav>
/*
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#"> About</a></li>
                        <li><a href="#"> Articles</a></li>
                    </ul>
                </div>
            </nav>*/
        );
    }
}

export default Navbar;