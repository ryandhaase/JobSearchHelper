var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var TaskSchema = new mongoose.Schema({
  name: String,
  status: Boolean,
  company_id: Number,
});

module.exports = mongoose.model('Task', TaskSchema);
