var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  link: String,
  phone: String,
  email: String,
  size: String,
  funding: String,
});

module.exports = mongoose.model('Job', JobSchema);
