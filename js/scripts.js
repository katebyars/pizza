//BACK END LOGIC
//Constructors
  function Pizza(nameOf, sizeOf){
    this.nameOf = nameOf;
    this.sizeOf = sizeOf;
    this.priceOf = 0;
    this.toppings = [];
  }
  function Order(pizzas){
    this.pizzas = [];
  }
  //Prototypes
  Order.prototype.addToOrder(pizza) {
    this.pizzas.push(pizza);
  }
  Pizza.prototype.addApizza(name, size, toppingsArray) {
    this.nameOf = name;
    this.sizeOf = size;
    toppingsArray.forEach(function(){
      this.toppings.push(topping))
    };
  }
  Pizza.prototype.cost(name, size, toppingsArray) {
    if (size === "Large") {
      this.priceOf +=5;
    } else if (size === "Medium") {
      this.priceOf +=4;
    } else if (size === "Small") {
      this.priceOf +=3;
    }
    for (i=0; i < toppingsArray.length; i +=1) {
      this.priceOf +=1;
    }
    return this.priceOf;
  }

//FRONT END LOGIC
$(document).ready(function(){
  event.preventDefault();

  $("#addPizza").submit(function(){
    console.log("hi");
    $(".deliveryGuy").hide();
    var thisPizza = new Pizza();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var theseToppings = $(this).val();
    }
    var pizzaSize = $("#size").val();
    thisPizza.toppings(theseToppings);
    thisPizza.cost(pizzaSize, thisPizza.toppings);
    // $("#pizzaDisplay").append("<li>" + "$" + thisPizza.priceOf + " "+ thisPizza.nameOf + "'s " + thisPizza.sizeOf + " pizza has: " + thisPizza.toppings + "<br>");
    // });
  });
  $("#submitOrder").click(function(){
    var address = $("#submitOrderAddress").val();
    $("#orderOnWay").show();
    $(".deliveryGuy").hide();
    $("#orderDetail").text("We will deliver your order, above, to: " + address);
  });
});
