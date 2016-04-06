angular.module('jobhelper.services', [])

.factory('formsFactory', function ($http) {
  var addTask = function (task) {
    return $http({
      method: 'POST',
      url: '/api/tasks',
      data: task,
    });
  };

  var addJob = function (job) {
    return $http({
      method: 'POST',
      url: '/api/jobs',
      data: job,
    });
  };

  return {
    addTask: addTask,
    addJob: addJob,
  };
})

.factory('getFactory', function ($http) {
  var getTasks = function () {
    return $http({
      method: 'GET',
      url: '/api/tasks',
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var getJobs = function () {
    return $http({
      method: 'GET',
      url: '/api/jobs',
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getJobs: getJobs,
    getTasks: getTasks,
  }
});
