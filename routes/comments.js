const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/articles/:id/comments', isLoggedIn, commentsCtrl.create);
router.get('/articles/:id/comments/edit', commentsCtrl.edit);
router.put('/articles/:id/comments', commentsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;