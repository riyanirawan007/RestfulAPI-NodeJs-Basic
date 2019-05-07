'use strict';
const router=require('express').Router();
const db=require('../config/database');
const model=require('../models/user');
const response=require('../helpers/response-parser');
const request=require('../helpers/request-parser');

//Do Action Here
router.get('/:id',(req,res)=>{
    db.query(model.sql.getByID,req.params.id,(err,rows,fields)=>{
        response.success(res,{data:rows});
    });
});
router.get('/',(req,res)=>{
    var user=new model.User();
    var values=request.forValues(user.attr,req,request.RequestMethod.QUERY);
    db.query(model.sql.getByCriteria(user.attr),values,(err,rows,fields)=>{
        response.success(res,{data:rows});
    });
});

router.delete('/delete/:id',(req,res)=>{
    db.query(model.sql.soft_delete,req.params.id,(err,rows,fields)=>{
        if(err)
        {
            response.error(res);
        }
        else
        {
            response.success(res);
        }
    });
});

router.delete('/hard_delete/:id',(req,res)=>{
    db.query(model.sql.hard_delete,req.params.id,(err,rows,fields)=>{
        if(err)
        {
            response.error(res);
        }
        else
        {
            response.success(res);
        }
    });
});

router.post('/insert',(req,res)=>{
    var values=request.forValues(new model.User().attr,req,request.RequestMethod.BODY);
    db.query(model.sql.insert,values,(err,rows,fields)=>{
        if(err)
        {
            response.error(res);
        }
        else
        {
            response.success(res);
        }
    });
});

router.put('/update',(req,res)=>{
    var data=request.forObject(new model.User().attr,req,request.RequestMethod.BODY);
    var values=[data.name,data.phone,data.email,data.id];
    db.query(model.sql.update,values,(err,rows,fields)=>{
        if(err)
        {
            response.error(res);
        }
        else
        {
            response.success(res);
        }
    });
});

module.exports=router;