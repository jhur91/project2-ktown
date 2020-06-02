const Article = require('../models/article');

module.exports = {
    index,
    create,
    new: newArticle,
    show,
    delete: deleteArticle
};

function deleteArticle(req, res) {
  Article.findByIdAndRemove(req.params.id, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/articles');
    }
  });
}

function show(req, res) {
  Article.findById(req.params.id, function(err, articles) {
    console.log(articles);  
    res.render('articles/show', { articles });
    });
  };


function newArticle(req, res) {
  res.render('articles/new.ejs');
}

function index(req, res) {
    Article.find({}, function (err, articles) {
        res.render('articles/index', { articles });
        console.log(articles);
    });
}

function create(req, res) {
    req.body.user = req.user;
    const article = new Article(req.body);
    console.log(req.body);
    article.save(function (err) {
        if (err) return res.redirect('/articles');
        console.log(article);
        res.redirect(`/articles`);
    });
}

