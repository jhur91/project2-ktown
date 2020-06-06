const Article = require('../models/article');

module.exports = {
    create,
    update,
    delete: deleteComment
};

function deleteComment(req, res) {
  Article.findOne({'comments._id': req.params.id}, function(err, article) {
    // Find the comment subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const commentSubdoc = article.comments.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/articles/${article._id}`);
    // Remove the text of the comment
    commentSubdoc.remove();
    // Save the updated book
    article.save(function(err) {
      // Redirect back to the book's show view
      res.redirect(`/articles/${article._id}`);
    });
  });
}



function update(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  Article.findOne({'comments._id': req.params.id}, function(err, article) {
    // Find the comment subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const commentSubdoc = article.comments.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/articles/${article._id}`);
    // Update the text of the comment
    commentSubdoc.content = req.body.content;
    // Save the updated book
    article.save(function(err) {
      // Redirect back to the book's show view
      res.redirect(`/articles/${article._id}`);
    });
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