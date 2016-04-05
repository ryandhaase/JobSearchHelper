angular.module('jobhelper.dashboard', ['ui.bootstrap', 'ngAnimate'])

.controller('dashboardCtrl', [
  '$scope',
  'getJobsFactory',
  function ($scope, getJobsFactory) {
    $scope.jobs = getJobsFactory.jobs;
    $scope.tasks = getJobsFactory.tasks;

    $scope.oneAtATime = true;
  },
]);
