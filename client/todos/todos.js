angular.module('jobhelper.todos', [])

.controller('todosCtrl', [
  '$scope',
  'getJobsFactory',
  function ($scope, getJobsFactory) {
    $scope.todos = [];

    $scope.addTask = function () {
      if (!$scope.task || $scope.task === '') {
        return;
      }

      $scope.todos.push({
        task: $scope.task,
        job: $scope.job,
        status: $scope.status,
        companyId: id,
      });

      $scope.task = '';
      $scope.job = '';
      $scope.status = '';
    };
  },
]);
