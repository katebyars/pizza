//BACK END LOGIC
//Constructor
function Pizza(nameOf, sizeOf, priceOf){
  this.nameOf = nameOf;
  this.sizeOf = sizeOf;
  this.priceOf = 0;
  this.toppings = [];
}
//Prototypes
Pizza.prototype.getToppings = function(toppingInputs) {
  var pizzasToppings = [];
  toppingInputs.forEach(function(topping){
    pizzasToppings.push(topping);
  });
  this.toppings = pizzasToppings;
}
Pizza.prototype.cost = function(sizeOf, toppingsArray){
  if (this.sizeOf === "Large") {
    this.priceOf +=5;
  } else if (this.sizeOf === "Medium") {
    this.priceOf +=4;
  } else if (this.sizeOf === "Small") {
    this.priceOf +=3;
  }
  for (i=0; i < toppingsArray.length; i +=1) {
    this.priceOf +=1;
  }
  return this.priceOf;
}
//FRONT END LOGIC
$(document).ready(function(){
  $("#addApizza").click(function(event){
    event.preventDefault();
    $(".deliveryGuy").hide();
    var newToppings = [];
    var thisPizza = new Pizza();
    thisPizza.nameOf = $("#pizzaName").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var theTopping = $(this).val();
      newToppings.push(theTopping);
    });
    thisPizza.getToppings(newToppings);
    thisPizza.sizeOf = $("#size").val();
    thisPizza.priceOf = thisPizza.cost(thisPizza.SizeOf, thisPizza.toppings);
    $("#pizzaDisplay").append("<li>" + "$" + thisPizza.priceOf + " "+ thisPizza.nameOf + "'s " + thisPizza.sizeOf + " pizza has: " + thisPizza.toppings + "<br>");
    });
  $("#submitOrder").click(function(){
    var address = $("#submitOrderAddress").val();
    $("#orderOnWay").show();
    $(".deliveryGuy").hide();
    $("#orderDetail").text("We will deliver your order, above, to: " + address);
  });
});
