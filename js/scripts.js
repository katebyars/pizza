$(document).ready(function(){
//BACK END LOGIC
function Pizza (nameOf, sizeOf, price) {
  this.nameOfPizza = nameOf;
  this.sizeOf = size;
  this.price = price;
  this.toppings = [];
}

Pizza.prototype.cost = function calculateCost(size, toppingsArray) {
  var cost = 0;
if (size = "large") {
    cost +=5;
  } else if (size = "medium") {
    cost +=4;
  } else if (size = "small") {
    cost +=3;
  }
  for (i=0; i < toppingsArray.length; i +=1) {
    cost +=i;
  }
  return cost;
}
//FRONT END LOGIC

$("#addPizza").click(function(event){
  event.preventDefault();
  var currentName = $("#pizzaName").val();
  var currentSize = $("#size").val();
  var currentPrice = 0;
  var currentToppings = [];
  var listOfToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function(){
    var currentToppings= $(this).val();
    listOfToppings.push(currentToppings);
  });
 var currentPizza = new Pizza (currentName, currentSize, currentPrice);
  currentPrice = currentPizza.cost(currentSize, currentToppings);
  $("#pizzaDisplay").append("<li>" + "$" + currentPrice + " "+ currentName + "'s " + currentSize + " pizza has: " + listOfToppings + "<br>");
});

$("#submitOrder").click(function(){
  // hide order details + show 'your order is on the way'
});
});
