// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {"mustard": 0.10, "mayo": 0.10, "c-none": 0};

  var condimentsChoicePrice;

  // Augment the original object with another method
  maker.addCondiments = function(condimentsChoice) {
    
	condimentsChoicePrice = condimentsPrices[condimentsChoice];

  };

  maker.getCondimentsPrice = function(){

  	return condimentsChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 