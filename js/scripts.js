$(document).ready(function(){
//BACK END LOGIC
function Pizza (nameOf, size, address, cost) {
  this.nameOfPizza = nameOf;
  this.size = size;
  this.address = address;
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

$("#addPizza").submit(function(){
  var currentPizza = new Pizza;
  this.pizzaName = $("#pizzaName").val();
  pizzaSize
  this.toppings = $("input:checkbox[name=toppings]:checked").each(function(){
    $(this).val();
  });
  this.price.cost (pizzaSize, toppings);
  ("#pizzaDisplay").append(this.Pizza);
});


$("#submitOrder").submit(function(){
  hide order details + show 'your order is on the way'
});
});
