describe('reverse', function() {
  var reverse;
  beforeEach(function() {
    module('kapacinoApp');
    inject(function (reverseFilter) {
      reverse = reverseFilter;
    });
  });

  it('should reverse contents of an array', function() {
    expect(reverse([3,2,1])).toEqual([1,2,3]);
  });
});