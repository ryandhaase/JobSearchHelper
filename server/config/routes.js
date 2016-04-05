// var linksController = require('../links/linkController.js');
// var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.get('/api/jobs/', jobsController.allJobs);
  app.post('/api/jobs/', jobsController.newJob);
  app.get('/api/tasks/', jobsController.allTasks);
  app.post('/api/tasks/', jobsController.newTask);
  //
  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};
