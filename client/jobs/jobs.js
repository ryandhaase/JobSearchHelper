angular.module('jobhelper.jobs', [])

.controller('jobsCtrl', [
  '$scope',
  'formsFactory',
  'getFactory',
  function ($scope, formsFactory, getFactory) {
    $scope.job = {};

    $scope.task = {};

    $scope.jobs = {};

    console.log($scope.jobs);

    $scope.getJobs = function () {
      getFactory.getJobs().then(function (jobs) {
        $scope.jobs.jobs = jobs;
      });
    };

    $scope.addJob = function () {
      if (!$scope.job.title || $scope.job.title === '') {
        return console.log('error');
      };

      formsFactory.addJob($scope.job)
      .then(function () {
        console.log('success');
      });

      $scope.job = {};
      newCompany.$setPristine();
      newCompany.$setUntouched();
    };

    $scope.addTask = function () {
      $scope.task.company_id = $scope.selected._id;
      $scope.task.status = false;

      if (!$scope.task.company_id) {
        return console.log('error');
      };

      formsFactory.addTask($scope.task)
      .then(function () {
        console.log('success');
      });

      $scope.task = {};
      $scope.selected = null;
      newCompany.$setPristine();
      newCompany.$setUntouched();
    };

    $scope.getJobs();
  },
]);
