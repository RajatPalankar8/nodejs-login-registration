// send an Email from NODEJS Server using nodemailer module
//This tutorial will show you how to use your Gmail account to send an email:

var nodemailer  = require('nodemailer'); // use mailer nodejs module

var mailOptions ={
    from:'rajatrrpalankar@gmail.com',
    to:'rajatrrpalankar@gmail.com',
    subject:"Sending Email to Rajat",
    text:"Welcome to NodeMailer, It's Working",
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}    // details of to send from, to,  subject, text(message),


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'rajatrrpalankar@gmail.com',
        pass:'sfpbpkdqiubremgg'
    }
}); // initialize create Transport service


transporter.sendMail(mailOptions,function(error,info){

     if(error){
         console.log(error);
     }else{
         console.log('Email Send ' + info.response);
     }
});
