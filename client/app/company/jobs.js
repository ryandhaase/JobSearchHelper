angular.module('jobhelper.jobs', [])

.controller('jobCtrl', [
  '$scope',
  'jobsFactory',
  function ($scope, jobsFactory) {
    $scope.jobs = jobsFactory.jobs.jobs;
  },
]);
