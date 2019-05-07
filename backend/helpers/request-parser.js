'use strict';
exports.RequestMethod={
    QUERY:'QUERY',
    PARAM:'PARAM',
    PARAMS:'PARAMS',
    BODY:'BODY'
}

exports.forValues=(model,req,method=this.RequestMethod.QUERY)=>
{
    var values=[];
    Object.keys(model).forEach((key)=>{
        var val=null;
        switch(method){
            case this.RequestMethod.QUERY:{
                val=req.query[key];
                break;
            }
            case this.RequestMethod.PARAM:{
                val=req.param[key];
                break;
            }
            case this.RequestMethod.PARAMS:{
                val=req.params[key];
                break;
            }
            case this.RequestMethod.BODY:{
                val=req.body[key];
                break;
            }
            default:
            {
                val=req.query[key];
                break;
            }
        }
        
        if(val!=null)
        {
            values.push(val);
            model[key]=val;
        }
    });
    return values;
}

exports.forObject=(model,req,method=this.RequestMethod.QUERY)=>
{
    var values=model;
    Object.keys(model).forEach((key)=>{
        var val=null;
        switch(method){
            case this.RequestMethod.QUERY:{
                val=req.query[key];
                break;
            }
            case this.RequestMethod.PARAM:{
                val=req.param[key];
                break;
            }
            case this.RequestMethod.PARAMS:{
                val=req.params[key];
                break;
            }
            case this.RequestMethod.BODY:{
                val=req.body[key];
                break;
            }
            default:
            {
                val=req.query[key];
                break;
            }
        }
        
        if(val!=null)
        {
            values[key]=val;
            model[key]=val;
        }
    });
    return values;
}