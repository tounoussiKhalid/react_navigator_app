import React,{Component} from 'react';
import content from '../articlesContents';
class Articles extends Component{

  render(){
  
    return (
      <div>
      
        {content.map( (el) =>
          <div key={content.indexOf(el)}> 
            <h3> {el.title} </h3>
            <div> {el.player} </div>
          </div>
         
        )}
      </div>
    );
  }
}

export default Articles;