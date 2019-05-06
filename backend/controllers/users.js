'use strict';
const router=require('express').Router();
const db=require('../config/database');
const model=require('../models/user');
const response=require('../helpers/respon-parser');

//Do Action Here
router.get('/',(req,res)=>{
    db.query(model.getAll,(err,rows,fields)=>{
        response.success(res,{data:rows});
    });
});
router.get('/:id',(req,res)=>{
    db.query(model.getByCriteria({id:req.params.id}),(err,rows,fields)=>{
        response.success(res,{data:rows});
    });
});

module.exports=router;