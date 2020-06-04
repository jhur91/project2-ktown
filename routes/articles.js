var express = require('express');
var router = express.Router();
const passport = require('passport');
const articleCtrl = require('../controllers/articles');

router.get('/', articleCtrl.index);
router.get('/new', articleCtrl.new);
router.get('/:id', articleCtrl.show);
router.get('/:id/edit', isLoggedIn, articleCtrl.edit);
router.post('/', isLoggedIn, articleCtrl.create);
router.delete('/:id', isLoggedIn, articleCtrl.delete);
router.put('/:id', articleCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;