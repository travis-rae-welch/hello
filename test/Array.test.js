var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#forEach()', function () {
    it('should iterate all values in the array', function () {
      var arr = ['hello', 'world', 'how', 'are', 'you'];
      var actual = '';
      arr.forEach(function (word) {
        actual += word;
      });
      var expected = 'helloworldhowareyou';
      actual.should.equal(expected);
    });
  });
});
