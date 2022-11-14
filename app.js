const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const date = new Date().toLocaleDateString();
     console.log(date);
    next();
    
}

app.get('/', logger,(req, res)=> {
    res.send('ok')
})




app.listen(3000, () => {
    console.log('hello world');
})
