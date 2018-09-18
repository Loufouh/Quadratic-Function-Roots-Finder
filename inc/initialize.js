"use strict";

let canvas;
let aInput, bInput, cInput;
let root1Container;
let root2Container;

let scaleCurve = 1;

window.onload = init;

function init() {
	initElements();
	drawCurve();
}

function initElements() {
	declareElements();
	setEventListeners();
	setTargetContext(canvas.getContext("2d"));
}

function declareElements() {
	aInput = document.getElementById("aInput");
	bInput = document.getElementById("bInput");
	cInput = document.getElementById("cInput");
	canvas = document.getElementById("curve");
	root1Container = document.getElementById("root1Container");
	root2Container = document.getElementById("root2Container");
}

function setEventListeners() {
	aInput.addEventListener("change", inputListener);
	bInput.addEventListener("change", inputListener);
	cInput.addEventListener("change", inputListener);
}

function inputListener() {

	if(aInput.value !== "" && bInput.value !== "" && cInput.value !== "") {
		let a = Number(aInput.value);
		let b = Number(bInput.value);
		let c = Number(cInput.value);
		let delta = Math.pow(b, 2) - 4*a*c;

		if(delta < 0)
			setRootsValue("Pas dans R", "Pas dans R"); // TODO : replace by special R char
		else if(delta === 0)
			setRootsValue(-b/2*a, undefined);
		else
			setRootsValue((-b + Math.sqrt(delta))/2*a,
				      (-b - Math.sqrt(delta))/2*a);
		drawCurve();	
	} else
		clearRootContainers();
}

function setRootsValue(root1, root2) {
	clearRootContainers();
	root1Container.insertAdjacentText("beforeend", root1);
	root2Container.insertAdjacentText("beforeend", root2);
}

function clearRootContainers() {
	root1Container.innerHTML = "";
	root2Container.innerHTML = "";
}

function drawCurve() {
	stroke(Color.rgb(255, 110, 110));
	strokeWeight(3);
	line(0, canvas.height/2, canvas.width, canvas.height/2);
	line(canvas.width/2, 0, canvas.width/2, canvas.height);

	stroke(Color.rgb(110, 255, 110));
	strokeWeight(2);
	line(0, 100, 100, 0);



	border(Color.rgb(52));
}

function f(x) {
	let a = Number(aInput.value);
	let b = Number(bInput.value);
	let c = Number(cInput.value);

	return a*x**2 + b*x + c; 
}
