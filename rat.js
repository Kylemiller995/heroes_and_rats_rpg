var Rat = function () {
}

Rat.prototype.touch = function (food) {
  food.changePoisonValue(true);
}
