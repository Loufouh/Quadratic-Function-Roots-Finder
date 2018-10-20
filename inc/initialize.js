"use strict";

let canvas;
let aInput, bInput, cInput;
let root1Container;
let root2Container;

let minWidthRangeInput, maxWidthRangeInput;
let submitWidthRangeButton;

let minHeightRangeInput, maxHeightRangeInput;
let submitHeightRangeButton;

let xScaleGridInput, yScaleGridInput;
let submitGridScaleButton;

let curveResolutionInput;
let submitCurveResolutionButton;

let drawer;

window.onload = init;

function init() {
	initElements();
	updatePolynomialFunction();
	updateWidthRange();
	updateHeightRange();
	updateGridScale();
	updateCurveResolution();
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

	root1Container = document.getElementById("root1Container");
	root2Container = document.getElementById("root2Container");

	canvas = document.getElementById("graph");
	
	minWidthRangeInput = document.getElementById("minWidthRangeInput");
	maxWidthRangeInput = document.getElementById("maxWidthRangeInput");
	submitWidthRangeButton = document.getElementById("submitWidthRangeButton");

	minHeightRangeInput = document.getElementById("minHeightRangeInput");
	maxHeightRangeInput = document.getElementById("maxHeightRangeInput");
	submitHeightRangeButton = document.getElementById("submitHeightRangeButton");

	xScaleGridInput = document.getElementById("xScaleGridInput");
	yScaleGridInput = document.getElementById("yScaleGridInput");
	submitGridScaleButton = document.getElementById("submitGridScaleButton");

	curveResolutionInput = document.getElementById("curveResolutionInput");
	submitCurveResolutionButton = document.getElementById("submitCurveResolutionButton");

	drawer = new GraphDrawer(canvas);
}

function setEventListeners() {
	aInput.addEventListener("change", updatePolynomialFunction);
	bInput.addEventListener("change", updatePolynomialFunction);
	cInput.addEventListener("change", updatePolynomialFunction);

	submitWidthRangeButton.addEventListener("click", updateWidthRange);
	submitHeightRangeButton.addEventListener("click", updateHeightRange);
	submitGridScaleButton.addEventListener("click", updateGridScale);
	submitCurveResolutionButton.addEventListener("click", updateCurveResolution);
}

