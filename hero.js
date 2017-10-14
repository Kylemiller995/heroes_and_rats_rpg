var Hero = function (name, favFood) {
  this.name = name;
  this.favFood = favFood;
  this.health = 100
  this.quests = [];

}


Hero.prototype.talk = function () {
  console.log("Brap brap rudeboy one time ")
};
