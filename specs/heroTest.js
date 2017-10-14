var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');

describe('Hero', function () {

  var hero1;

  beforeEach(function () {
    hero1 = new Hero("xyz", "abc");
  });

  it("should be able to talk", function () {
    assert.strictEqual(hero1.talk(), "xyz")
  });

  it("should be able to add to quests", function () {
    hero1.addQuest(1);
    assert.strictEqual(hero1.quests.length, 1)
  })






})
