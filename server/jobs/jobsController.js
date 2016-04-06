var Job = require('./jobsModel.js');
// var Q = require('q');
// var util = require('../config/utils.js');
module.exports = {
  allJobs: function (req, res, next) {
    Job.find()
    .then(function (jobs) {
      res.json(jobs);
    })
    .catch(function (error) {
      next(error);
    });
  },

  newJob: function (req, res, next) {
    Job.create(req.body), function (err, job) {
      if (err) {
        return handleError(err);
      } else {
        console.log(saved);
      }
    };
  },
};
