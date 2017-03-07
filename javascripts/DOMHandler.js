// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
 
// Get a reference to the <select> element that has all the meat options

var meatChooser = document.getElementById("meat"); //not going to work with "byName" because it becomes a nodelist
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var veggiesChooser = document.getElementById("veggies");
var condimentsChoooser = document.getElementById("condiments");
var button = document.getElementById('button');
var summary = document.getElementById("summary");

/* 
  A checkbox element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addMeat(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getMeatPrice());


  summary.innerHTML += event.target.value + `<br>`;

});

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getBreadPrice());


  summary.innerHTML += event.target.value + `<br>`;

});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCheese(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getCheesePrice());


  summary.innerHTML += event.target.value + `<br>`;

});

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getVeggiesPrice());


  summary.innerHTML += event.target.value + `<br>`;

});

condimentsChoooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getCondimentsPrice());


  summary.innerHTML += event.target.value + `<br>`;

});

button.addEventListener("click", function(event) {

  summary.innerHTML += `<p>Your Total is: </p>` + (SandwichMaker.getTotalPrice()).toFixed(2);


});





