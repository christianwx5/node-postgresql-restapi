const { Router } = require('express');
const routes = Router();
const auth = require('./auth');
const user = require('./user'); 

routes.use('/authentication', auth);
routes.use('/user', user);


module.exports = routes;



// router.get('/users', getUsersC);
// router.get('/users/:id', getUserByIdC);
// router.post('/users', createUserC);
// router.put('/users/:id', updateUserC)
// router.delete('/users/:id', deleteUserC);