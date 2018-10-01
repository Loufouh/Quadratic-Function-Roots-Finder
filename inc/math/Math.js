"use strict";

// To re-maps a value from a range (inMin inMax) to another (outMin outMax)
Math.map = function (x, inMin, inMax, outMin, outMax) {
	return (x - inMin)*(outMax - outMin)/(inMax - inMin) + outMin;
} 
