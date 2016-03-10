// Uppercase filter
// Other filters can be found here: https://docs.angularjs.org/api/ng/filter
// filter receives a function
// Pass a variable to yoify
// Pass second variable
// Extract into module
// minAge filter
// guard clause
// Pass filter into controller with $filter service
// Later we will look at an answer to votes filter
// Testing

angular.module('app', [])
  .controller('myController', function($scope) {
    $scope.valueToReverse = "Angular Rocks";
  })
  .filter('reverse', function() {
    var filter = function(str) {
      if(!str) { return }
      return str.split('').reverse().join('');
    }
    return filter;
  })





















// Initial state
// angular.module('app', [])
//   .controller('catController', function($scope, $filter) {
//     $scope.cat = "Tareco";
//     $scope.numbers = [9,1,2,3,6,4,5,6,18,7,8,9,99];
//   })

