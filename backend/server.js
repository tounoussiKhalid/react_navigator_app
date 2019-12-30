const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose'); 

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB connection
const uri= process.env.ATLAS_URI;
console.log( "**********:"+ uri );
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection= mongoose.connection;

connection.once('open', () =>{
    console.log("MongoDB connection success");
});


//using routes
const articlesRouter= require('./routes/articles');
app.use('/articles', articlesRouter);


//server lestening
app.listen(port, () =>{
    console.log(`Serever is listening on port: ${port}`);
}); 