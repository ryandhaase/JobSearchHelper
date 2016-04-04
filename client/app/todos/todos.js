app.controller('Todos', [
  '$scope',
  function ($scope) {
    $scope.todos = [
      { task: 'todo1', status: 'not complete', job: 'xyz' },
      { task: 'todo2', status: 'not complete', job: 'xyz' },
      { task: 'todo3', status: 'not complete', job: 'xyz' },
      { task: 'todo4', status: 'not complete', job: 'xyz' },
      { task: 'todo5', status: 'not complete', job: 'xyz' },
      { task: 'todo6', status: 'not complete', job: 'xyz' },
    ];
  },
]);
