var expect = require('chai').expect;

describe('let declaration', function () {
  "use strict";

  it('can declare a variable like var', function () {
    let foo = 'bar';

    expect(foo).to.equal('bar');
  });

  it('restricts scope to the block', function () {
    let foo = 'bar';

    if (true) {
      var foo = 'baz';
      expect(foo).to.equal('baz');
    }

    //same as 'if (true)'
    //{
      //var foo = 'baz';
      //expect(foo).to.equal('baz');
    //}

    expect(foo).to.equal('bar');

  });

});
