'use-strict';

module.exports=(app)=>{
    app.use('/',require('../controllers/index'));
    app.use('/user',require('../controllers/users'));
    app.use('/error',require('../controllers/error'));
}