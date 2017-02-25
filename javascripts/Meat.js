// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 2.00, "ham": 2.50, "m-none": 0.00};

  var meatChoicePrice;

  // Augment the original object with another method
  maker.addMeat = function(meatChoice) {
    
	meatChoicePrice = meatPrices[meatChoice];

  };

  maker.getMeatPrice = function(){

  	return meatChoicePrice

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker); 