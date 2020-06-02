const Article = require('../models/article');

module.exports = {
    create
};

// function create(req, res) {
//     req.body.user = req.user;
//     const comment = new Comment(req.body);
//     console.log(req.body);
//     article.save(function (err) {
//         if (err) return res.redirect('/articles');
//         console.log(article);
//         res.redirect(`/articles/${article._id}`);
//     });
// }

function create(req, res) {
    Article.findById(req.params.id, function(err, article) {
        article.comments.push(req.body);
        console.log(req.body);
        article.save(function(err) {
          res.redirect(`/articles/${article._id}`);
        });
      });
}