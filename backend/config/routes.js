'use strict';
module.exports=(app)=>{
    app.use('/',require('../controllers/index'));
    app.use('/users',require('../controllers/users'));
}