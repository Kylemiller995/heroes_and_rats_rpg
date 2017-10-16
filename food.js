var Food = function (name, replValue) {
  this.name = name;
  this.replValue = replValue;
  this.poisoned = false
}

Food.prototype.changePoisonValue = function (bool) {
  this.poisoned = bool;
}

module.exports = Food;
