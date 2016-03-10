angular.module('app',[])
  .controller('commentController', function($scope, $log, $filter) {
    $scope.limit = 0;

    $scope.comments = [
      {
        comment: "I really like cheese",
        votes: 10
      },
      {
        comment: "Gorgonzola for me",
        votes: 8
      },
      {
        comment: "I like mine with Ham",
        votes: -4
      },
      {
        comment: "I'm not so sure about edam though",
        votes: -2
      },
      {
        comment: "Gouda properly rocks!",
        votes: 4
      },
      {
        comment: "I quite like a bit of mild cheddar. Taste's like butter",
        votes: -19
      },
      {
        comment: "Cheese is just old milk",
        votes: -8
      }
    ]
  })
  .filter("votes", function() {
    return function(array, number) {
      return array.filter(function(obj){
        return obj.votes >= number;
      });
    };
  });
