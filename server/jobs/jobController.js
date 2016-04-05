var Job = require('./jobModel.js');
// var Q = require('q');
// var util = require('../config/utils.js');
module.exports = {
  allJobs: function (req, res, next) {
    findAllJobs({})
    .then(function (tasks) {
      res.json(tasks);
    })
    .fail(function (error) {
      next(error);
    });
  },
};
