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
    url: '/home',
    templateUrl: 'home/home.html',
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardCtrl',
  });
});
