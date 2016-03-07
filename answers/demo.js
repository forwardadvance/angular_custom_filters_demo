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

// var min = 8;
// console.log(comments.filter(function(a) {
//   return (a.votes > min);
// }));

// var limit = function(a) {
//   return (a > 3);
// }
// alert([1,2,3,4,5].filter(limit))

// var comments = [
//   {
//     comment: "I really like cheese",
//     votes: 10
//   },
//   {
//     comment: "Gorgonzola for me",
//     votes: 8
//   },
//   {
//     comment: "I like mine with Ham",
//     votes: -4
//   },
//   {
//     comment: "I'm not so sure about edam though",
//     votes: -2
//   },
//   {
//     comment: "Gouda properly rocks!",
//     votes: 4
//   },
//   {
//     comment: "I quite like a bit of mild cheddar",
//     votes: -19
//   },
//   {
//     comment: "Cheese is just old milk",
//     votes: -8
//   }
// ]

// var min = 8;
// console.log(comments.filter(function(a) {
//   return (a.votes > min);
// }));


// console.log(
//   ["1" ,"2" ,"9" ,"12" ,"5" ,"3" ,"14" ,"5"].sort(function(a, b) {
//     console.log(a,b)
//     return parseInt(a) > parseInt(b)
//   })
// );
