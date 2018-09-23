"use strict";

function updateWidthRange() {
	let widthRange = new Vector();

	if(minWidthRangeInput.value !== "")
		widthRange.x = Number(minWidthRangeInput.value);
	else
		widthRange.x = drawer.widthRange.x

	if(maxWidthRangeInput.value !== "")
		widthRange.y = Number(maxWidthRangeInput.value);
	else
		widthRange.y = drawer.widthRange.y

	drawer.setWidthRange(widthRange.x, widthRange.y);
	drawCurve();
}

function updateHeightRange() {
	let heightRange = new Vector();

	if(minHeightRangeInput.value !== "")
		heightRange.x = Number(minHeightRangeInput.value);
	else
		heightRange.x = drawer.heightRange.x;

	if(maxHeightRangeInput.value !== "")
		heightRange.y = Number(maxHeightRangeInput.value);
	else
		heightRange.y = drawer.heightRange.y;

	drawer.setHeightRange(heightRange.x, heightRange.y);
	drawCurve();
}

function updateGridScale() {
	let gridScale = new Vector();

	if(xScaleGridInput.value !== "")
		gridScale.x = Number(xScaleGridInput.value);
	else
		gridScale.x = drawer.gridScale.x;

	if(yScaleGridInput.value !== "")
		gridScale.y = Number(yScaleGridInput.value);
	else
		gridScale.y = drawer.gridScale.y;

	drawer.setGridScale(gridScale.x, gridScale.y);
	drawCurve();
}

function updateCurveResolution() {
	if(curveResolutionInput.value !== "") {
		drawer.setResolution(Number(curveResolutionInput.value));
		drawCurve();
	}
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
