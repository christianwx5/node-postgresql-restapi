const { Router } = require('express');
const router = Router();

const { getUserC, getUserByIdC , createUserC } = require('../controllers/index.controllers');


router.get('/users', getUserC);
router.get('/users/:id', getUserByIdC);
router.post('/users', createUserC);

module.exports = router;