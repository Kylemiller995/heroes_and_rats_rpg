var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function () {

  var hero1;

  beforeEach(function () {
    hero1 = new Hero("xyz", "abc");
  });

  it("should be able to talk", function () {
    assert.strictEqual(hero1.talk(1), "1")
  });






})