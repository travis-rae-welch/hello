var _ = require('lodash');

describe('lodash', function () {
  describe('chunk', function () {
    it('should split array into chunks', function () {
      var actual = _.chunk(['a', 'b', 'c', 'd'], 2);
      var expected = [['a', 'b'], ['c', 'd']];
      actual.should.deepEqual(expected);
    });
  });
});
