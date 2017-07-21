$(document).ready(function(){
//BACK END LOGIC
// function Pizza (nameOf, size, price) {
//   this.nameOfPizza = nameOf;
//   this.size = size;
//   this.price = price;
//   this.toppings = [];
// }
//
// Pizza.prototype.cost = function calculateCost(size, toppingsArray) {
//   var cost = 0;
// if (size = "large") {
//     cost +=5;
//   } else if (size = "medium") {
//     cost +=4;
//   } else if (size = "small") {
//     cost +=3;
//   }
//   for (i=0; i < toppingsArray.length; i +=1) {
//     cost +=i;
//   }
//   return cost;
}
//FRONT END LOGIC

$("#addPizza").click(function(event){
  event.preventDefault();
    alert("hi");
    var currentName = $("#pizzaName").val();
    alert("his");
    alert(currentName);
  // $("#pizzaDisplay").text(currentName);
  // var currentSize = $("#size").val();
  // var currentToppings = $("input:checkbox[name=toppings]:checked").each(function(){
  //   $(this).val();
  // });
  // var currentPrice = 0;
  // var currentPizza = new Pizza (currentName, currentSize, currentPrice);
  // currentPrice = currentPizza.cost(currentSize, currentToppings);
  //
  $("#pizzaDisplay").text(currentName);
});
//
// $("#submitOrder").submit(function(){
//   hide order details + show 'your order is on the way'
// });
});
