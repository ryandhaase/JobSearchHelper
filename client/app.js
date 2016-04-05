angular.module('jobhelper', [
  'jobhelper.services',
  'jobhelper.dashboard',
  'jobhelper.jobs',
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
  // .state('todos', {
  //   url: '/todos',
  //   templateUrl: 'app/todos/todos.html',
  //   controller: 'todosCtrl',
  // })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'app/dashboard/dashboard.html',
    controller: 'dashboardCtrl',
  });
});
