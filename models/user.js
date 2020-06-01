var mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
  });

  

  module.exports = mongoose.model('Student', studentSchema);
