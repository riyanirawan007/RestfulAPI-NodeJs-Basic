var response={};

exports.success=(res,value={status:null,success:null,message:null,data:null})=>{
response={};
response['status']=(value.status!=null)?value.status:200;
response['success']=(value.success!=null)?value.success:true;
response['message']=(value.message!=null)?value.message:'Success';
if(value.data!=null) response['data']=value.data;
res.json(response);
res.end;
};

exports.error=(res,value={status:null,success:null,error:null})=>{
  response={};
    response['status']=(value.status!=null)?value.status:400;
    response['success']=(value.success!=null)?value.success:false;
    response['error']=(value.error!=null)?value.error:'Error';
    res.json(response);
    res.end;
};