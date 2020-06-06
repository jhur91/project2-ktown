var mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  }
  }, {
    timestamps: true
  });

const articleSchema = new mongoose.Schema({
    title: String,
    image: {
      type: String, 
      ref: "image",
      default: "https://i.imgur.com/3H9xUt5.png",
    },

    article: String,
    comments: [commentSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
