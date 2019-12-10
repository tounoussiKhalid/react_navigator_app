import React from 'react';
import content from '../articlesContents';

class ArticleDetails extends React.Component{
    

    render(){
        const title = this.props.match.params.articleTitle;
        
        const elementArr = content.find(
              el => el.title === title
        );


        console.log(elementArr);
         
        if ( elementArr !== undefined ){
                console.log( "found" );
            return(
                <div className="row col-md-8" style= {{ margin : ' auto'}}>
                    <div class="card" style={{width: 40 +'rem',  margin: 'auto'}}>
                        <img src={ elementArr.img} class="card-img-top"  style={{ width: 20 +'rem', height: 20 +'rem', margin: 'auto'}} alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title"> {elementArr.title}</h5>
                            <p class="card-text"> {elementArr.content}</p>
                        </div>
                    </div>
                </div>
            );
        }
            
        else {

            console.log( "Not found" );
            return (
                <div className="row col-md-8" style= {{ margin : ' auto', color : 'red', fontSize : 22}}> 
                error 404
                 </div>
            );
}
        }
               
}

export default ArticleDetails;
