const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/articles/:id/comments', commentsCtrl.create);
router.get('/articles/:id/comments/edit', commentsCtrl.edit);
router.put('/articles/:id/comments', commentsCtrl.update);


module.exports = router;