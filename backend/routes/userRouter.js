const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/',(req,res)=>{
    res.send('Welcome to userPage');
})


router.post('/register',(req,res)=>{
    console.log(req.body);
    new userModel(req.body).save()
    .then((result) => {
        console.log(result)
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    const loginData = req.body;
    userModel.findOne({email: loginData.email, password: loginData.password})
    .then((result) => {
        if(result){
            
            res.status(200).json(result);
        }else{
            res.status(401).json({status:"Login Failed"});
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
})


// exporting routes
module.exports = router;