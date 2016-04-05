var Task = require('./tasksModel.js');
// var Q = require('q');
// var util = require('../config/utils.js');
module.exports = {
  allTasks: function (req, res, next) {
    findAllTasks({})
    .then(function (tasks) {
      res.json(tasks);
    })
    .fail(function (error) {
      next(error);
    });
  },

  newTask: function (req, res, next) {
    Task.create(req.body), function (err, job) {
      if (err) {
        return handleError(err);
      } else {
        console.log(saved);
      }
    };
  },
};
