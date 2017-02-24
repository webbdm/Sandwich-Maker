// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"american": 2.00, "pepperjack": 2.50, "ch-none": 0};

  var cheeseChoicePrice;

  // Augment the original object with another method
  maker.addCheese = function(cheeseChoice) {
    
	cheeseChoicePrice = cheesePrices[cheeseChoice];

  };

  maker.getCheesePrice = function(){

  	return cheeseChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 