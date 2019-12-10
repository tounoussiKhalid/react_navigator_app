import React,{Component} from 'react';
import content from '../articlesContents';
import Article from '../components/Article';
class Articles extends Component{

  render(){
    return (
         <div className="row col-md-8"  style={{ margin : 'auto'}}>
            
            {content.map( (el) =>
            <Article el={el} key={ content.indexOf(el) }/>
          )}       
        </div>
      
    );
  }
}

export default Articles;