const express=require('express');
const {userSignup,userLogin} = require('../controllers/sign_login');
const path = require('path');
const router=express.Router();

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','signup.html'))
})
router.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','signin.html'))
})
 console.log(__dirname)
router.post('/signup',userSignup)
router.post('/signin',userLogin)


module.exports=router;