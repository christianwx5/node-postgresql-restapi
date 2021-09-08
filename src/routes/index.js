const { Router } = require('express');
const router = Router();

const { getUser } = require('../controllers/index.controllers');


router.get('/users', getUser);

module.exports = router;