const { getUsersC, getUserByIdC, createUserC, updateUserC, deleteUserC } = require('../controllers/UserControllers');
const { Router } = require('express');
const  checkJwt = require('../middleware/jwt');


// import { checkRole } from '../middleware/role';

const routes = Router();

//http://localhost:3000/user/profile esta esra la que usaremos para el perfil 
// Get all users
routes.get('/',checkJwt, (req, res) => {
    const {userId, username} = res.locals.jwtPayload;
    res.status(200).json("Welcome "+username);
});

// Get one user
routes.get('/:id', getUserByIdC);

// Create a new user
routes.post('/register', createUserC);

// Edit user
routes.put('/:id', updateUserC)

// deleted user
routes.delete('/:id', deleteUserC);

module.exports = routes;

