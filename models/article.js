var mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });

const articleSchema = new mongoose.Schema({
    title: String,
    article: String,
    comments: [commentSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
