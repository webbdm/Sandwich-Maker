// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options

var meatChooser = document.getElementById("meat"); //not going to work with "byName" because it becomes a nodelist
var breadChooser = document.getElementById("bread");
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


  console.log(event.target.value + " was selected" + " so price is now " + SandwichMaker.getTotalPrice());

});

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price

  SandwichMaker.addTopping(SandwichMaker.getBreadPrice());


  console.log(event.target.value + " was selected" + " so price is now " + SandwichMaker.getTotalPrice());

});