angular.module('jobhelper.todos', [])

.controller('todosController', [
  '$scope',
  'todosFactory',
  function ($scope, todosFactory) {
    $scope.todos = todosFactory.tasks.todos;

    $scope.addTask = function () {
      if (!$scope.task || $scope.task === '') {
        return;
      }

      $scope.todos.push({
        task: $scope.task,
        job: $scope.job,
        status: $scope.status,
      });

      $scope.task = '';
      $scope.job = '';
      $scope.status = '';
    };
  },
]);
