const { Router } = require('express');
const routes = Router();
const auth = require('./auth');
const user = require('./user'); 

// routes.use('/auth', auth);
routes.use('/user', user);
//app.use('/',routes);

module.exports = routes;



// router.get('/users', getUsersC);
// router.get('/users/:id', getUserByIdC);
// router.post('/users', createUserC);
// router.put('/users/:id', updateUserC)
// router.delete('/users/:id', deleteUserC);