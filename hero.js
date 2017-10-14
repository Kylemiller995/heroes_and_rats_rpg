var Hero = function (name, favFood) {
  this.name = name;
  this.favFood = favFood;
  this.health = 100;
  this.quests = [];

}


Hero.prototype.talk = function (speech) {
  return this.name.toString();
};

Hero.prototype.addQuest = function (quest) {
  this.quests.push(quest);
}

Hero.prototype.heal = function (item) {
  if (this.health > (100 - item.replValue) {
    this.health = 100;
  } else {
    this.health += item.replValue;
  }
}


module.exports = Hero;
