const router = require('express').Router();
const { userController } = require('../controller');

router.post('/user/signup', userController.createUser);

router.post('/login', userController.login);

module.exports = router;