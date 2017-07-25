//BACK END LOGIC
  function Pizza (nameOf, sizeOf, priceOf) {
    this.nameOfPizza = nameOf;
    this.sizeOf = sizeOf;
    this.priceOf = 0;
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

  // var currentName = $("#pizzaName").val();
  // var currentSize = $("#size").val();
  // var currentToppings = [];
  // var listOfToppings = [];

  // var currentPizza = new Pizza (currentName, currentSize, currentPrice);
  // this.price = currentPizza.cost(currentSize, listOfToppings);
  // this.nameOfPizza = currentName;
  // this.sizeOf = currentSize;
  // this.toppings = listOfToppings;
$(document).ready(function(){
  //FRONT END LOGIC
  $("#addPizza").click(function(event){
    event.preventDefault();
    $(".deliveryGuy").hide();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var currentToppings= $(this).val();
      listOfToppings.push(currentToppings);
    });
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
