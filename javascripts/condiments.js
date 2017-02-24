// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {"mustard": 0.10, "mayo": 0.10, "m-none": 0};

  var condimentChoicePrice;

  // Augment the original object with another method
  maker.addCondiment = function(condimentChoice) {
    
	condimentChoicePrice = condimentPrices[condimentChoice];

  };

  maker.getCondimentPrice = function(){

  	return condimentChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 