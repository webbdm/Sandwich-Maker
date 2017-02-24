// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = {"turkey": 2.00, "ham": 2.50, "m-none": 0};

  var veggiesChoicePrice;

  // Augment the original object with another method
  maker.addVeggies = function(veggiesChoice) {
    
	veggiesChoicePrice = veggiesPrices[veggiesChoice];

  };

  maker.getVeggies = function(){

  	return veggiesChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 