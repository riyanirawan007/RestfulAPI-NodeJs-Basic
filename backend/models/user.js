'use strict';
var time=require('../helpers/datetime-helper');
const modelAttr=function(){
    this.id=null;
    this.name=null;
    this.phone=null;
    this.email=null;
    this.created_at=null;
    this.update_at=null;
    this.deleted_at=null;
};

exports.User=function(model=new modelAttr()){
    this.attr=model;
}
exports.sql={
    getAll:"Select * from user where deleted_at is null",
    getByID:"Select * from user where deleted_at is null and id=?",
    getByCriteria : (m=new this.User().attr)=>{
        var query="Select * from user where deleted_at is null";
        var model=new modelAttr();
        Object.keys(m).forEach((key)=>{
            if(m[key]!=model[key]){
                query+=" AND "+key+" = ?";
            }
        });
        return query;  
    },
    insert:"Insert into user(name,phone,email) values(?,?,?)",
    hard_delete:"Delete from user where id=?",
    soft_delete:"Update user set deleted_at='"+time.getCurrentDateTime()+"' where id=?",
    update:"Update user set name=?,phone=?,email=?,updated_at='"+time.getCurrentDateTime()+"'"
    +" where id=?",
}

