const Article = require('../models/article');
const Student = require('../models/user');



module.exports = {
    index,
    create,
    new: newArticle,
    show,
    delete: deleteArticle,
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
    res.render('articles/edit', { articles });
});
}

function deleteArticle(req, res) {
  Article.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/articles');
    }
  });
}

function show(req, res) {

 
  Article.findById(req.params.id, function(err, articles) {
    Student.findById(articles.user, function(err) {

      res.render('articles/show', { articles, user: req.user});
    })
  });
};


function newArticle(req, res) {
    res.render('articles/new.ejs');
  }

function index(req, res) {
  Article.find({})
  .populate('user')
  .exec(function(err, articles) {
    res.render('articles/index', { articles, user: req.user });

  })
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

