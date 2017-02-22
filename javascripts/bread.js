// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {"wheat": 1.00, "pretzel": 1.50, "none": 0};

  var breadChoicePrice;

  // Augment the original object with another method
  maker.addBread = function(meatChoice) {
    
	breadChoicePrice = breadPrices[meatChoice];

  };

  maker.getBreadPrice = function(){

  	return breadChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 