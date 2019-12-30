import React,{Component} from 'react';
import content from '../articlesContents';
import Article from '../components/Article';
class Articles extends Component{

  render(){
    return (
         <div className="row col-md-10"  style={{ margin : 'auto' , justifyContent: 'center'}}>
            
            {content.map( (el) =>
            <Article el={el} key={ content.indexOf(el) }/>
          )}       
        </div>
      
    );
  }
}

export default Articles;