var Task = require('./taskModel.js');
// var Q = require('q');
// var util = require('../config/utils.js');
module.exports = {
  allTasks: function (req, res, next) {
    findAllTasks({})
    .then(function (tasks) {
      res.json(tasks);
    })
    .fail(function (error) {
      next(error)
    });
  },

  // newTask: function (req, res, next) {
  //   var taskId = req.body.task;
  //   findTask({ id: taskId })
  // }
}
