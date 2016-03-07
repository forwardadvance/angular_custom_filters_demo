
angular.module('yoify', [])
  .filter('yoify', function() {
    var filter = function(str, greeting) {
      greeting = greeting || "Yo";
      return [
        greeting,
        str
      ].join(' ').trim();
    }
    return filter;
  })
