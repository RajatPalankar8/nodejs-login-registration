const express = require('express');
const userRouter = require('./routers/user.router')
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(express.static("public"));
app.set('view engine','ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',userRouter);

app.listen(3000,()=>{
  console.log("Listening to 3000");
});

module.exports = app;


