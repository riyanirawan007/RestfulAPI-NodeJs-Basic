const router=require('express').Router();
const template=require('../helpers/template');

router.get('/',(req,res)=>{
    template.render(res,'pages/users');
});

module.exports=router;