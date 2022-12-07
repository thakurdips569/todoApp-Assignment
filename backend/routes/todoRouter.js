const express = require('express');
const router = express.Router();
const todoModel = require('../models/todoModel');

router.get('/', (req,res)=>{
    console.log('welcome to todo Page');

})

router.post('/save',(req,res)=>{
    console.log(req.body);
    new todoModel(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})

router.post('/getbyuser',(req,res)=>{
    
    todoModel.find({createdBy: req.body._id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})

router.post('/delete',(req,res)=>{
    todoModel.findByIdAndDelete({_id: req.body._id})
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.json(err);
    });
})

router.post('/edit',(req,res)=>{
    console.log(req.body.todo._id);
    todoModel.updateOne({_id: req.body.todo._id}, {todo:req.body.updateTodo})
    .then((result) => {
        res.json(result)
        // console.log();
    }).catch((err) => {
        res.json(err)
    });
    
})

module.exports = router;