angular.module('jobhelper.services', [])

.factory('todosFactory', [
  function () {
    var tasks = {
      todos: [
        { task: 'todo1', job: 'xyz', status: 'not complete' },
        { task: 'todo2', job: 'xyz', status: 'not complete' },
        { task: 'todo3', job: 'xyz', status: 'not complete' },
        { task: 'todo4', job: 'xyz', status: 'not complete' },
        { task: 'todo5', job: 'xyz', status: 'not complete' },
        { task: 'todo6', job: 'xyz', status: 'not complete' },
      ],
    };

    return {
      tasks: tasks,
    };
  },
]);
