var express = require('express');
var router = express.Router();
const passport = require('passport');
const articleCtrl = require('../controllers/articles');

router.get('/', articleCtrl.index);
router.get('/new', articleCtrl.new);
router.get('/:id', articleCtrl.show);
router.get('/:id/edit', articleCtrl.edit);
router.post('/', articleCtrl.create);
router.delete('/:id', articleCtrl.delete);




module.exports = router;