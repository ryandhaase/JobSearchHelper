angular.module('jobhelper', [
  'jobhelper.services',
  'jobhelper.todos',
  'ui.bootstrap',
  'ui.router',
])

.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('todos');

  $stateProvider
  .state('todos', {
    url: '/todos',
    templateUrl: 'app/todos/todos.html',
    controller: 'todosController',
  });
});
