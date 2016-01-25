var expect = require('chai').expect;

describe('template strings', function() {
  it('should be a string', function() {
    var string = `abe`;
    expect(string).to.be.a('string');
  });
});
