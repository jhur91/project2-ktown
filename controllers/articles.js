const Article = require('../models/article');

module.exports = {
    index,
    create
};

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
