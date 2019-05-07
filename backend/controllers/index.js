'use strict';
const router=require('express').Router();
const response=require('../helpers/response-parser');

//Do Action Here
router.get('/',(req,res)=>{
    response.success(res,{message:"Successfull connect to API"});
});

module.exports=router;