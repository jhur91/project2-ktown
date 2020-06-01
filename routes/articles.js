var express = require('express');
var router = express.Router();
const passport = require('passport');
const articleCtrl = require('../controllers/articles');

router.get('/', articleCtrl.index);
router.post('/', articleCtrl.create);

module.exports = router;