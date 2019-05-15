const router=require('express').Router();
const config=require('../config/app');
router.get('/404',(req,res)=>{
    res.render('../views/error/404',{
        base_url:config.app.base_url
    });
});
module.exports=router;