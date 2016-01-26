"use strict";

var expect = require('chai').expect;

describe('destructing', function () {
  describe('arrays', function () {
    it('can extract from arrays', function () {
    var [foo, bar] = ['baz', 'qux'];

    expect(foo).to.equal('baz');
    expect(bar).to.equal('qux');
    });

    it('can handle leading commas', function () {
      var [,b] = ['apple', 'banana', 'carrot'];

      expect(b).to.equal('banana');
    });

    it('can handle nested arrays', function () {
      var [uno,dos,[tres,[cuatro]]] = 
    });
  };
});
