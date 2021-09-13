const {Router}  = require('express');
const AuthController = require('../controllers/AuthControllers');
const { checkJwt } = require('../middleware/jwt');

const routes = Router();

//login
routes.post('/login', AuthController.login);

// Change password
routes.post('/change-pasword', AuthController.changePassword);

module.exports = routes;
