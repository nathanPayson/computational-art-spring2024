let numCellsWidth = 20;
let numCellsHeight = 20;
let cellWidth;
let cellHeight;
let colorArray = [];
let colorOffset = 0;
let noiseOffset = 0;
let strokeOffset = 0;
let lineArray = [];
function setup() {
    createCanvas(600, 400);


    cellWidth = width / numCellsWidth;
    cellHeight = height / numCellsHeight;
    for (let i = 0; i < numCellsWidth * numCellsHeight; i++) {
        colorArray.push(random(0, 50));
        colorArray.push(random(150, 255));
        colorArray.push(random(30, 255));
    }
    for (let i = 0; i < numCellsWidth * numCellsHeight; i++) {
        lineArray.push(random(5, cellWidth-5));
        lineArray.push(random(5, cellHeight-5));
        lineArray.push(random(5, cellWidth-5));
        lineArray.push(random(5, cellHeight-5));
    }
}

function draw() {
    background(0, 0, 100);
    drawGrid()
}

function drawGrid() {
    for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
        for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
            let x = cellWidth * xIndex;
            let y = cellHeight * yIndex;

            push();
            translate(x, y);
            noStroke();

            let r = colorArray[3 * (xIndex * numCellsHeight + yIndex)];
            let g = colorArray[3 * (xIndex * numCellsHeight + yIndex) + 1];
            let b = colorArray[3 * (xIndex * numCellsHeight + yIndex) + 2];

            b = (b + colorOffset) % 255 + 30;
            g = (g + colorOffset) % 255 + 150;
            r = (r + colorOffset) % 50;

            fill(color(r, g, b));
            rect(0, 0, cellWidth, cellHeight,map(noise(x*0.1+noiseOffset,y*0.1+noiseOffset),0,1,0,15));
            strokeWeight(1 + map(noise(x * 0.1+strokeOffset, y * 0.1+strokeOffset), 0, 1, 1, 10));
            stroke(1);
            let r1 = lineArray[4 * (xIndex * numCellsHeight + yIndex)];
            let r2 = lineArray[4 * (xIndex * numCellsHeight + yIndex)+1];
            let r3 = lineArray[4 * (xIndex * numCellsHeight + yIndex)+2];
            let r4 = lineArray[4 * (xIndex * numCellsHeight + yIndex)+3];
            line(r1, r2, r3, r4);
            pop();
        }
        colorOffset += 0.008;
        noiseOffset += 0.0005;
        strokeOffset += 0.001;
    }
}