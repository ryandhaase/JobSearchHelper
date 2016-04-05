angular.module('jobhelper.dashboard', ['ui.bootstrap', 'ngAnimate'])

.controller('dashboardCtrl', [
  '$scope',
  'getFactory',
  function ($scope, getFactory) {
    console.log('hello');
    $scope.jobs = {};
    $scope.tasks = {};

    $scope.oneAtATime = true;

    $scope.getJobs = function () {
      getFactory.getJobs().then(function (jobs) {
        $scope.jobs.jobs = jobs;
      });
    };

    $scope.getTasks = function () {
      getFactory.getTasks().then(function (tasks) {
        console.log(tasks)
        $scope.tasks.tasks = tasks;
      });
    };

    $scope.getJobs();
    $scope.getTasks();
  },
]);
