const Article = require('../models/article');

module.exports = {
    create,
    edit,
    update
};

function update(req, res) {
  Article.findByIdAndUpdate(req.params.id, req.body, function(err) {
    res.redirect(`/articles/${req.params.id}`);
  });
}

function edit(req, res) {
  Article.findById(req.params.id, function(err, articles) {
    res.render('articles/editComments', { articles });
});
}

function create(req, res) {
  req.body.user = req.user;
    Article.findById(req.params.id, function(err, article) {
        article.comments.push(req.body);
        console.log(req.body);
        article.save(function(err) {
          res.redirect(`/articles/${article._id}`);
        });
      });
}