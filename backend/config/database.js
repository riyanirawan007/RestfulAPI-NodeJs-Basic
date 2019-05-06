'use strict';
const mysql=require('mysql');
const dbSetting={
    host:"localhost"
    ,user:"root"
    ,password:""
    ,database:"practice_nodejs"
};

const db=mysql.createConnection(dbSetting);
db.connect((err)=>{
    if(err!=null) console.log(err);
});

module.exports=db;