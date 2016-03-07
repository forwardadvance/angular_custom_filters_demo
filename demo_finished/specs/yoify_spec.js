describe('Yoify filter', function() {

  var values = [
    {in: 'Henry', out: 'Yo Henry'},
    {in: 'Jacob', out: 'Yo Jacob'},
    {in: [], out: 'Yo'},
    {in: null, out: 'Yo'},
    {in: undefined, out: 'Yo'}
  ];

  beforeEach(module('app'));

  var yoify;
  beforeEach(inject(function($filter) {
    yoify = $filter('yoify');
  }));

  it('should say yo to Henry', function() {
    expect(yoify('Henry')).toEqual('Yo Henry');
  });

  values.forEach(function(value){
    it('should say yo to ' + value.in, function() {
      expect(yoify(value.in)).toEqual(value.out);
    });
  });

});

























// describe('Yoify filter', function() {

//   beforeEach(module('app'));

//   var yoify;
//   beforeEach(inject(function($filter) {
//     yoify = $filter('yoify');
//   }));

//   it('should yoify Manny', function() {
//     expect(yoify('Manny')).toEqual('Yo Manny');
//   });

//   it('should yoify Freddy with a greeting', function() {
//     expect(yoify('Freddy', 'Hello')).toEqual('Hello Freddy');
//   });

//   it('should yoify with null', function() {
//     expect(yoify(null)).toEqual('Yo');
//   });
// })
