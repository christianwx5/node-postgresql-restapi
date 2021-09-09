const { getUsersC, getUserByIdC, createUserC, updateUserC, deleteUserC } = require('../controllers/UserControllers');
const { Router } = require('express');


// import { checkJwt } from '../middleware/jwt';
// import { checkRole } from '../middleware/role';

const routes = Router();

// Get all users
routes.get('/', getUsersC);

// Get one user
routes.get('/:id', getUserByIdC);

// Create a new user
routes.post('/', createUserC);

// Edit user
routes.put('/:id', updateUserC)

// deleted user
routes.delete('/:id', deleteUserC);

module.exports = routes;

