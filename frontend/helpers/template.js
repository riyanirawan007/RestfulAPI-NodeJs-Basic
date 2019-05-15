const api=require('../config/api')
const template='../views/templates/container';
const config=require('../config/app');

exports.render=(res,view,data={title:'Web Page'})=>{
    var bundle={
        base_url:config.app.base_url
        ,view:'../../views/'+view
        ,api:api.config
        ,data:data
    };
    return res.render(template,bundle);
}