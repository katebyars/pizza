$(document).ready(function(){
//BACK END LOGIC
function Pizza (nameOf, sizeOf, price) {
  this.nameOfPizza = nameOf;
  this.sizeOf = sizeOf;
  this.price = price;
  this.toppings = [];
}

Pizza.prototype.cost = function calculateCost(size, toppingsArray) {
  var cost = 0;
  if (size === "Large") {
    cost +=5;
  } else if (size === "Medium") {
    cost +=4;
  } else if (size === "Small") {
    cost +=3;
  }
  for (i=0; i < toppingsArray.length; i +=1) {
    cost +=1;
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
  this.price = currentPizza.cost(currentSize, listOfToppings);
  this.nameOfPizza = currentName;
  this.sizeOf = currentSize;
  this.toppings = listOfToppings;
  $("#pizzaDisplay").append("<li>" + "$" + this.price + " "+ this.nameOfPizza + "'s " + this.sizeOf + " pizza has: " + this.toppings + "<br>");
  listOfToppings = [];
});

$("#submitOrder").click(function(){
  var address = $("#submitOrderAddress").val();
  $("#orderOnWay").show();
  $(".deliveryGuy").hide();
  $("#orderDetail").text("We will deliver your order, above, to: " + address);
});
});
