var mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    article: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
