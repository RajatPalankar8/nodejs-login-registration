const jwt = require('jsonwebtoken');


const requireAuth =(req,res,next)=>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,"Secrets",(err,decodedToken)=>{
             if (err) {
                res.render('login');
             }else{
                 console.log(decodedToken);
                 next();
             }
        });
    }else{
        res.render('login');
    }
}

module.exports = {requireAuth};