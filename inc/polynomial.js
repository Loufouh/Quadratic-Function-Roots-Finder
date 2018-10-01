"use strict";

function updatePolynomialFunction() {

	if(aInput.value !== "" && bInput.value !== "" && cInput.value !== "") {
		let a = Number(aInput.value);
		let b = Number(bInput.value);
		let c = Number(cInput.value);
		let delta = Math.pow(b, 2) - 4*a*c;
		
		drawer.setFunction(x => a*(x**2) + b*x + c);
		drawCurve();
		
		if(delta < 0)
			setRootsValue("Pas dans ℝ");
		else if(delta === 0)
			setRootsValue(Number.parseFloat(-b/2*a).toPrecision(4));
		else
			setRootsValue( Number.parseFloat( (-b + Math.sqrt(delta))/(2*a) ).toPrecision(4),
				       Number.parseFloat( (-b - Math.sqrt(delta))/(2*a) ).toPrecision(4) );
	} else
		clearRootContainers();
}

