'use strict';
exports.User={id:null
    ,name:null
    ,phone:null
    ,email:null
    ,created_at:null
    ,updated_at:null
    ,deleted_at:null};

exports.getAll="Select * from user";
exports.getByID="Select * from user where id=?";
exports.getByCriteria = (user=this.User)=>{
    var sql="Select * from user ";
    if(user.id!=null) sql+=" where id="+user.id;
    return sql;  
};
