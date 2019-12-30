import React from 'react';
import content from '../articlesContents';
import Article from '../components/Article';
import axios from 'axios';


class ArticleDetails extends React.Component{
    
    constructor(props){
        super(props);

        this.state= {
            votes: null
        }
    }

    
    componentWillMount(){
        axios.get(`http://localhost:5000/articles/${this.props.match.params.articleTitle}` )
        .then(article =>{
            this.setState({
                votes: article.data.votes
            })
            
        });
        console.log('componentWillMount called!');
    }

    componentWillReceiveProps(nextProps){
        axios.get(`http://localhost:5000/articles/${nextProps.match.params.articleTitle}` )
        .then(article =>{
            this.setState({
                votes: article.data.votes
            })
            
        });
        console.log('componentWillReceiveProps called!');
    }


    voteUpdate= (articleTitle) =>{
        let vote= this.state.votes;

        this.setState({
            votes: ++vote
        })

        axios.post(`http://localhost:5000/articles/update/${articleTitle}` , {"vote": vote})
        .then(console.log('article vote updated!'));
    }

    render(){

        const title = this.props.match.params.articleTitle;
        
        const elementArr = content.find(
              el => el.title === title
        );


        console.log(elementArr);
         
        if ( elementArr !== undefined ){
                console.log( "found" );
            return(
                <div className="row">
                    <div className="col-md-8" style= {{ marginTop : ' 5%'}}>
                        <div className="card" style={{width: 40 +'rem',  margin: 'auto'}}>
                            <img src={ elementArr.img} className="card-img-top"  style={{ width: 20 +'rem', height: 20 +'rem', margin: 'auto'}} alt="..."/>
                            <div className="card-body">
                                <div className="card-title d-flex justify-content-between">
                                    <h5 className="flex-fill"> {elementArr.title}</h5>
                                    <span className=" flex-fill" style={{ color: "blck", textAlign: "center"}}>  votes : {this.state.votes} </span>
                                </div>
                                
                                <p className="card-text"> {elementArr.content}</p>
                                <button type="button" className="btn btn-primary" style={{float: 'right'}} onClick={() =>{this.voteUpdate(title)}}>
                                    Voter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center" style= {{ backgroundColor : 'lightgrey' , paddingTop: '1%'}}>
                        {content.filter((item) =>{
                            return item.category == elementArr.category && item.title != elementArr.title;
                         })
                         .map((el) => <Article el={el} key={ content.indexOf(el) }/> )
                        }
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
