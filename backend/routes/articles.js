const router= require('express').Router();
let Article= require('../models/articles.model');

router.route('/').get((req,res) =>{
    Article.find()
    .then(articles =>res.json(articles))
    .catch(err => res.status(400).json('Error: '+err));
});


router.route('/:title').get((req, res) =>{
    Article.findOne({title : req.params.title})
    .then(article => res.json(article))
    .catch(err =>  res.status(400).json('Error: '+err));
});


router.route('/add').post((req,res) =>{
    const title= req.body.title;
    const votes= req.body.vote;

    const newArticle= new Article({title,votes});

    newArticle.save()
    .then(() => res.json('article added!'))
    .catch(err =>  res.status(400).json('Error: '+err));
});


router.route('/update/:title').post((req,res) =>{
    Article.findOne({title : req.params.title})
    .then(article => {
        article.votes= req.body.vote;

        article.save()
        .then(() => res.json('article updated!'))
        .catch(err =>  res.status(400).json('Error: '+err));
    })
    .catch(err =>  res.status(400).json('Error: '+err));
});

module.exports= router;