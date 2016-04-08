// BUSINESS LOGIC
function Pizza(size, number, sauce, topping) {
  this.size = size;
  this.number = number;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.totalCost = function() {
  var toppingList = this.topping.split(" ");
  var toppingCost = ((toppingList.length * 2) * this.number);
  var sizeCost = 0;


  if (this.size === "jakeSize") {
    sizeCost = 100;
  }else if (this.size === "x-large") {
    sizeCost = 80
  }else if (this.size === "large") {
    sizeCost = 60
  }else if (this.size === "medium") {
    sizeCost = 40
  }else if (this.size === "small") {
    sizeCost = 20
  }else {
    alert("Make a DAMN PIZZA!!!!")
  }

    var totalCost = toppingCost + (sizeCost * (parseInt(this.number)));
    return totalCost;
};
// USER INTERFACE LOGIC
$(document).ready(function() {
  console.log("Page Loaded");
  $("form#pizzaOrder").submit(function(event) {
    var costForAll = 0;
    event.preventDefault();

    $(".pizzaCreation").each(function() {
      var pizzaTopping = $("input#topping").val().toString();
        // $("input:radio[name=pepperoni]:checked").val();
        // $("input:radio[name=cheese]:checked").val();
        // $("input:radio[name=meatballs]:checked").val();
        // $("input:radio[name=steak]:checked").val();
        // $("input:radio[name=beef]:checked").val();
        // $("input:radio[name=sausage]:checked").val();
        // $("input:radio[name=canadianBacon]:checked").val();
        // $("input:radio[name=pineapple]:checked").val();
        // $("input:radio[name=bbqChicken]:checked").val();
        // $("input:radio[name=pulledPork]:checked").val();
        var sauce =
        $("input:checkbox[name=redSauce]:checked").val();
        $("input:checkbox[name=whiteSauce]:checked").val();
        $("input:checkbox[name=pinkSauce]:checked").val();
        var size = $("select#size").val();
        var number = $("input#numberOfPizza").val();
        var pizza1 = new Pizza(size, number, sauce, pizzaTopping);
        $("#pizzaCostDisplay").show();
        $("#totalCost").text(number + " " + size + " " + "pizza(s) with) " + sauce + " and " + pizzaTopping + " " + " will cost $ " + pizza1.totalCost() );
        costForAll += pizza1.totalCost();
    });

    $("costForAllPizza").text("total cost for all Your Damn Pizzas will be $" + costForAll);
    $("select#size").val("Select Size");
    $("input#topping").val("");
    $("input#sauce").val("");
    $("input#numberOfPizza").val("");
  });

  $("#addNewPizza").click(function(){
    $("#pizzaForms").append("<div class='pizzaCreation'><label for='pizzaSize'>Pizza Size: </label>" + "<select id='size'>" +     "<option>Select Size</option>" +
    "<option value='x-large'>X-Large</option>" +
    "<option value='large'>Large</option>" +
    "<option value='medium'>Medium</option>" +
    "<option value='small'>Small</option>" +
    "</select>" +
    "<label for='topping'>Toppings</label>" +
    "<input type='text' id='topping' placeholder='pepperoni, cheese, etc.'>" +
    "<label for='numberOfPizza'>Number of Pizza's:</label>" +
    "<input type='text' id='numberOfPizza'> </div>");
  });

});
