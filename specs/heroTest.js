var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');
var Race = require('../race.js');
var Armour = require('../armour.js');

describe('Hero', function () {

  var hero1;
  var race1;
  var food1;
  var task1;
  var task2;
  var task3;
  var task4;
  var task5;
  var task6;
  var armour1;

  beforeEach(function () {
    humanRace = new Race("human", 100);
    hero1 = new Hero("xyz", "cheese", humanRace);
    food1 = new Food("apple", 10);
    task1 = new Task("high", "medium", 25);
    task2 = new Task("medium", "high", 32);
    task3 = new Task("medium", "medium", 52);
    task4 = new Task("medium", "high", 20);
    task5 = new Task("low", "low", 2);
    task6 = new Task("medium", "low", 50);
    armour1 = new Armour(10, 10, "legs");

  });

  it("should be able to talk", function () {
    assert.strictEqual(hero1.talk(), "xyz");
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
    hero1.sortQuests('difficulty');
    assert.deepEqual(hero1.quests, [task1, task2, task3])
    hero1.sortQuests('urgency')
    assert.deepEqual(hero1.quests, [task2, task1, task3])
    hero1.sortQuests('reward')
    assert.deepEqual(hero1.quests, [task1, task2, task3])
  })

  it("should be able to filter by completness", function () {
    hero1.addQuest(task1);
    hero1.addQuest(task2);
    hero1.addQuest(task3);
    task3.finishQuest(task3);
    assert.deepEqual(hero1.filterQuests(false), [task1, task2])
  })

  it("should be able to pick up item", function () {
    hero1.pickUp(armour1);
    assert.strictEqual(hero1.inventory.length, 1);
  })

  it("should be able to equip item"), function () {

  }

})
