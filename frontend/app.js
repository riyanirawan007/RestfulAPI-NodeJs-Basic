const appServer=require('express');
const app=appServer();
const route=require('./config/routes');
const config=require('./config/app')

//define assets as public folder
app.use('/assets', appServer.static(__dirname + '/assets'));
//define view engine
app.set('view engine','ejs');
//define router
route(app);
app.get('*',function(req,res){
    res.redirect('/error/404');
});

app.listen(config.app.port,()=>{
    console.log('Starting frontend node js/ejs on port '+config.app.port);
});
