// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiesPrices = {"lettuce": 0.30, "tomato": 0.50, "v-none": 0};

  var veggiesChoicePrice;

  // Augment the original object with another method
  maker.addVeggies = function(veggiesChoice) {
    
	veggiesChoicePrice = veggiesPrices[veggiesChoice];

  };

  maker.getVeggiesPrice = function(){

  	return veggiesChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 