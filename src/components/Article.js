import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

class Article extends React.Component{
    render(){
        return (
        <div class="card" style={{width: 18 +'rem', textAlign: 'center', marginRight: 2 +'rem' , marginBottom : 2 +'rem'}}>
            <img src={ this.props.el.img} class="card-img-top"  style={{ width: 10 +'rem', height: 10 +'rem', margin: 'auto'}} alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> {this.props.el.title}</h5>
                <p class="card-text"> {this.props.el.content.toString().substring(0, 80)}</p>
                <a  class="btn btn-primary" >
                    <Link to={ "/articles/" + this.props.el.title} > <span style={{ color: "white"}}> Show More details</span> </Link>
                </a>
                
            </div>
        </div>
        );
    }
}

export default Article;
