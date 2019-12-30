const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const articleSchema= new Schema({
    title: {type: String},
    votes: {type: Number},
});

const Article= mongoose.model('Articles' , articleSchema);

module.exports= Article;