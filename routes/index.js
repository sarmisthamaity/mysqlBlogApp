const router = require('express').Router();
const userRoute = require('./user.route');
const dataRoute = require('./data.routes');

router.use('/', userRoute);
router.use('/', dataRoute);

module.exports = router;