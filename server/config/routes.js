var jobsController = require('../jobs/jobsController.js');
var tasksController = require('../tasks/tasksController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.get('/api/jobs', jobsController.allJobs);
  app.post('/api/jobs', jobsController.newJob);
  app.get('/api/tasks', tasksController.allTasks);
  app.post('/api/tasks', tasksController.newTask);

  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};
