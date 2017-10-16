var Hero = function (name, favFood, race) {
  this.name = name;
  this.favFood = favFood;
  this.health = race.maxHealth;
  this.quests = [];
  this.race = race;
  this.inventory = [];
  this.equipped = [];

};


Hero.prototype.talk = function (speech) {
  return this.name.toString();
};

Hero.prototype.addQuest = function (quest) {
  this.quests.push(quest);
};

Hero.prototype.heal = function (item) {
  var healingAmount = item.replValue;
  if (item.poisoned === true){
    this.health -= healingAmount;
    return;
  };
  if (item.name === this.favFood) {
    healingAmount = healingAmount * 1.5;
  };
  if (this.health > (this.race.maxHealth - healingAmount)) {
    this.health = this.race.maxHealth;
  } else {
    this.health += healingAmount;
  };
};

Hero.prototype.sortQuests = function (x) {
  this.quests.sort(function (a, b) {
    if (a[x] < b[x]){
      return -1;
    };
    if (a[x] > b[x]){
      return 1;
    }
    return 0;
  });
};

Hero.prototype.filterQuests = function (x) {
  var filtered = this.quests.filter(function(quest) {
    if (quest.completed === x){
      return quest;
    }
  })
  filtered.forEach(function (x){
    console.log(x);
  })
  return filtered;
}

Hero.prototype.equipItem = function (item) {
  this.equipped.forEach (function (iteminequip) {
    if (iteminequip.bodyPart === item.bodyPart) {
      var deletedIndex = this.equipped.indexOf(iteminequip);
      var deleted = this.equipped.splice(deletedIndex, 1);
      this.inventory.push(deleted[0]);
      this.equipped.splice(deletedIndex, 0, item);
      return;
    }
  });
  this.equipped.push(item);
}

Hero.prototype.pickUp = function (item) {
  this.inventory.push(item);
}


module.exports = Hero;
