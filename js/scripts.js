// BUSINESS LOGIC
function Pizza(size, number, sauce, topping) {
  this.size = size;
  this.number = number;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.totalCost = function() {
  var toppingList = this.topping.split(" ");
  var toppingCost = ((toppingList.length * .75) * this.number);
  var sauceCost = 0;
  var sizeCost = 0;
}

if (this.size === "jakeSize") {
  sizeCost = 100;
}
else if (this.size === "x-large") {
  sizeCost = 80
}
else if (this.size === "large") {
  sizeCost = 60
}







$(document).ready(function() {
  console.log("Page Loaded");

});
