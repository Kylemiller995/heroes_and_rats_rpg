var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');

describe('Hero', function () {

  var hero1;
  var food1;
  var task1;
  var task2;
  var task3;
  var task4;
  var task5;
  var task6;

  beforeEach(function () {
    hero1 = new Hero("xyz", "cheese");
    food1 = new Food("apple", 10);
    task1 = new Task("high", "medium", 25)
    task2 = new Task("medium", "medium", 8)
    task3 = new Task("medium", "medium", 5)
    task4 = new Task("medium", "high", 20)
    task5 = new Task("low", "low", 2)
    task6 = new Task("medium", "low", 50)
  });

  it("should be able to talk", function () {
    assert.strictEqual(hero1.talk(), "xyz")
  });

  it("should be able to add to quests", function () {
    hero1.addQuest(1);
    assert.strictEqual(hero1.quests.length, 1)
  })

  it("shouldnt heal past 100", function () {
    hero1.health = 99;
    hero1.heal(food1);
    assert.strictEqual(hero1.health, 100);
  })

  it("should heal", function () {
    hero1.health = 50;
    hero1.heal(food1);
    assert.strictEqual(hero1.health, 60);
  })

  it("should damage when poisoned", function () {
    food1.poisoned = true;
    hero1.heal(food1);
    assert.strictEqual(hero1.health, 90);
  })

  it("should heal more if fav", function () {
    food1.name = "cheese";
    hero1.health = 50;
    hero1.heal(food1);
    assert.strictEqual(hero1.health, 65)
  })

  it("should be able to sort by task", function () {
    hero1.addQuest(task2);
    hero1.addQuest(task1);
    hero1.addQuest(task3);
    hero1.sortQuestsByDfiff('difficulty');
    assert.deepEqual(hero1.quests, [task1, task2, task3])
  })

})
