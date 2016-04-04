angular.module('jobhelper', [
  'jobhelper.services',
  'jobhelper.todos',
  'ui.bootstrap',
  'ui.router',
])

.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/home/home.html',
  })
  .state('todos', {
    url: '/todos',
    templateUrl: 'app/todos/todos.html',
    controller: 'todosController',
  });
});
