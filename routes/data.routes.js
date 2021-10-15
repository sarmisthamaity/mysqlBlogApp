const {datapostController} = require('../controller/index');
const router = require('express').Router();

router.post('/data', datapostController.createpost);

module.exports = router;