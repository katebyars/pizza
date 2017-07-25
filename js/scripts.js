//BACK END LOGIC
  function Pizza(nameOf, sizeOf, priceOf){
    this.nameOf = nameOf;
    this.sizeOf = sizeOf;
    this.priceOf = 0;
    this.toppings = [];
  }
  Pizza.prototype.getToppings(){

  }
  Pizza.prototype.cost(size, toppingsArray) {
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
Pizza.prototype.display(price, naname, size, toppings){
  $("#pizzaDisplay").append("<li>" + "$" + this.price + " "+ this.nameOfPizza + "'s " + this.sizeOf + " pizza has: " + this.toppings + "<br>");
    listOfToppings = [];
}


//FRONT END LOGIC
$(document).ready(function(){
  event.preventDefault();

  $("#addPizza").submit(function(){
    $(".deliveryGuy").hide();
    var newPizza = new Pizza("input#pizzaName", "input#size", price );
    $("input:checkbox[name=toppings]:checked").each(function(){
      newPizza.toppings.push();
    });
    newPizza.display();
  });
  $("#submitOrder").click(function(){
    var address = $("#submitOrderAddress").val();
    $("#orderOnWay").show();
    $(".deliveryGuy").hide();
    $("#orderDetail").text("We will deliver your order, above, to: " + address);
  });
});
