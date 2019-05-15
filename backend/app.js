const appServer = require('express');
const app = appServer();
const port=process.env.PORT || 3000;
const route=require('./config/routes');
const bodyParser=require('body-parser');
const response=require('./helpers/response-parser');
const API=require('./config/api');

//secure access
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, api_key");
    res.header("Access-Control-Allow-Methods",'*');
    if(req.headers.api_key!=API.config.STATIC_KEY){
        response.error(res,{status:401,error:"Unauthorized"});
        return;
    }
    else{
        next();
    }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app router
route(app);

app.listen(port,()=>{
    console.log('Staring Restful API on port '+port);
});

