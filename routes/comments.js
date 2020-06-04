const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.get('/comments/:id/edit', commentsCtrl.edit);
router.post('/articles/:id/comments', isLoggedIn, commentsCtrl.create);
router.put('/comments/:id', commentsCtrl.update);
router.delete('/comments/:id', commentsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;