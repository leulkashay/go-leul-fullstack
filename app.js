//mongodb+srv://leul:<password>@cluster0-4mdzw.mongodb.net/test?retryWrites=true&w=majority

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const stuffRouter=require('./routes/stuff');

const app= express();
mongoose.connect('mongodb+srv://mahi:mahi123@cluster0-4mdzw.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(()=>{
    console.log('succesfully conect to Atlas');
})
.catch((error)=>{
    console.log('unable to connect');
    console.error(error);
});
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content,Accept,Content-Type,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,PATCH,DELETE,POST");
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff',stuffRouter);



module.exports=app;