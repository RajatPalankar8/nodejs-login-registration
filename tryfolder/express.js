var express = require('express');

var app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',(req,res)=>{
    console.log(req.body);
});

app.get('/:name',(req,res)=>{
    res.send('Hello  '+req.params.name);
});

app.listen(3000,()=>{
    console.log('Express Running 3000');
})