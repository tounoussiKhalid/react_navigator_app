import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'

class Article extends React.Component{
    render(){
        return (
        <div className="card" style={{width: 18 +'rem', textAlign: 'center', marginRight: 2 +'rem' , marginBottom : 2 +'rem'}}>
            <img src={ this.props.el.img} className="card-img-top"  style={{ width: 10 +'rem', height: 10 +'rem', margin: 'auto'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {this.props.el.title}</h5>
                <p className="card-text"> {this.props.el.content.toString().substring(0, 80)}</p>
                <a  className="btn btn-primary" >
                    <Link to={ "/articles/" + this.props.el.title} > <span style={{ color: "white"}}> Show More details</span> </Link>
                </a>
                
            </div>
        </div>
        );
    }
}

export default Article;
