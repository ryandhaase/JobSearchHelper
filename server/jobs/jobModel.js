var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  link: String,
  phone: String,
  email: String,
  size: String,
  funding: String,
  id: Schema.Types.ObjectId,

  company_id: Number,
});

module.exports = mongoose.model('Job', JobSchema);
