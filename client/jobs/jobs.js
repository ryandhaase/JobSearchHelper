angular.module('jobhelper.jobs', [])

.controller('jobsCtrl', [
  '$scope',
  function ($scope) {
    $scope.jobs = [];

    // $scope.addJob = function () {
    //   if (!$scope.title || $scope.title === '') {
    //     console.log('error');
    //   };
    //
    //   $scope.jobs.push({
    //     company: $scope.company,
    //     title: $scope.title,
    //     description: $scope.description,
    //     link: $scope.link,
    //     phone: $scope.phone,
    //     email: $scope.email,
    //     size: $scope.size,
    //     funding: $scope.funding,
    //     id: '',
    //   });
    //
    //   // $scope.newCompany.$setPristine();
    //   $scope.company = '';
    //   $scope.title = '';
    //   $scope.description = '';
    //   $scope.link = '';
    //   $scope.phone = '';
    //   $scope.email = '';
    //   $scope.size = '';
    //   $scope.funding = '';
    // };
  },
]);
