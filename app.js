const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const date = new Date().toLocaleDateString();
     console.log(date);
    next();
    
}
const logger1 = (req, res, next) => {
    const date = new Date().toTimeString();
     console.log(date);
    next();
    
}
const logger2 =(req,res,next)=>{
    const date = new Date().toDateString();
    console.log(date,'hello');
    next();
}

app.get('/', logger,(req, res)=> {
    res.send('ok')
})
app.get('/13', logger1,(req, res)=> {
    res.send('itay')
})
app.get('/12',logger2,(req,res)=>{
    res.send('hello')
})




app.listen(3000, () => {
    console.log('hello world');
})
