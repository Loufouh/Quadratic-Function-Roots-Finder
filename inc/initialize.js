"use strict";

let canvas;
let aInput, bInput, cInput;
let root1Container;
let root2Container;

let drawer;

window.onload = init;

function init() {
	initElements();
	drawCurve()
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

	drawer = new GraphDrawer(canvas);
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
		
		drawer.setFunction(x => a*(x**2) + b*x + c);
		drawCurve();
		
		if(delta < 0)
			setRootsValue("Pas dans ℝ");
		else if(delta === 0) {
			setRootsValue(-b/2*a);
		} else {
			setRootsValue((-b + Math.sqrt(delta))/2*a,
				      (-b - Math.sqrt(delta))/2*a);
		}
	} else
		clearRootContainers();
}

function setRootsValue(root1, root2=root1) {
	clearRootContainers();
	root1Container.insertAdjacentText("beforeend", root1);
	root2Container.insertAdjacentText("beforeend", root2);
}

function clearRootContainers() {
	root1Container.innerHTML = "";
	root2Container.innerHTML = "";
}

function drawCurve() {
	background(Color.rgb(255));
	drawer.draw();
}

function drawRoots(root1, root2) {
}
