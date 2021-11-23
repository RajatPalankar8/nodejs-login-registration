const express = require('express');
const app = express();
const ejs = require('ejs');
const router = express.Router();
const userController = require('../controller/user.controller');
const { requireAuth } = require('../middleware/auth.middleware'); 

//get routers
router.get('/',(req,res)=>{
    res.render('home');
});

router.get('/register',userController.register_get);
router.get('/login',userController.login_get);

 router.get('/welcome',requireAuth,userController.welcome_get);

 router.get('/logout',(req,res)=>{
    console.log(req.body);
   res.render('home');
});

//post routes
router.post('/register',userController.register_post);
router.post('/login',userController.login_post);
router.post('/post_test',userController.post_text);
router.get('/set-cookies',userController.setCookies);
router.get('/get-cookies',userController.getCookies);

module.exports = router;