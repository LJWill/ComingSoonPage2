const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

router.get('/diyHome', diyHome);
router.get('/diyTemplete', diyTemplete);

module.exports = router;