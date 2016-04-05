angular.module('jobhelper', [
  'jobhelper.services',
  'jobhelper.dashboard',
  'jobhelper.jobs',
  'jobhelper.todos',
  'ui.bootstrap',
  'ui.router',
])

.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('dashboard');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'home/home.html',
  })
  // .state('todos', {
  //   url: '/todos',
  //   templateUrl: 'app/todos/todos.html',
  //   controller: 'todosCtrl',
  // })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl',
  });
});
