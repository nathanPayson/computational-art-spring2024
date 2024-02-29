let numCellsWidth = 18;
let numCellsHeight = 18;
let cellWidth;
let cellHeight;
let colorArray = [];
let colorOffset = 0;
let noiseOffset = 0;
let strokeOffset = 0;
let lineArray = [];
function setup() {
    createCanvas(700, 600);
    background(0, 255, 50);

    cellWidth = width / numCellsWidth;
    cellHeight = height / numCellsHeight;
    for (let i = 0; i < numCellsWidth * numCellsHeight; i++) {
        colorArray.push(random(0, 40));
        colorArray.push(random(205, 255));
        colorArray.push(random(50, 255));
    }
    for (let i = 0; i < numCellsWidth * numCellsHeight; i++) {
        lineArray.push(random(5, cellWidth-5));
        lineArray.push(random(5, cellHeight-5));
        lineArray.push(random(5, cellWidth-5));
        lineArray.push(random(5, cellHeight-5));
    }
    drawGrid1();
}

function draw() {
    background(0, 255, 50, .4);
    if (frameCount % 5 == 0) {
        drawGrid1();
    }
    drawGrid2();

}

function drawGrid1() {
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

            b = (b + colorOffset) % 205 + 50;
            g = (g + colorOffset) % 45 + 210;
            r = (r + colorOffset) % 40;

            fill(color(r, g, b));
            rect(0, 0, cellWidth, cellHeight, map(noise(x * 0.1 + noiseOffset, y * 0.1 + noiseOffset), 0, 1, 0, 30));
            strokeWeight(1 + map(noise(x * 0.1 + strokeOffset, y * 0.1 + strokeOffset), 0, 1, 1, 10));
            //stroke(1);
            let r1 = lineArray[4 * (xIndex * numCellsHeight + yIndex)];
            let r2 = lineArray[4 * (xIndex * numCellsHeight + yIndex) + 1];
            let r3 = lineArray[4 * (xIndex * numCellsHeight + yIndex) + 2];
            let r4 = lineArray[4 * (xIndex * numCellsHeight + yIndex) + 3];
            //line(r1, r2, r3, r4);


            pop();
        }
        colorOffset += 0.07;
        noiseOffset += 0.03;
        strokeOffset += 0.001;
    }
}
    function drawGrid2() {
        for (let xIndex = 0; xIndex < numCellsWidth; xIndex++) {
            for (let yIndex = 0; yIndex < numCellsHeight; yIndex++) {
                let x = cellWidth * xIndex;
                let y = cellHeight * yIndex;

                push();
                translate(x, y);
                let dotX = randomGaussian(cellWidth / 2,6);
                let dotY = randomGaussian(cellHeight / 2, 6);

                noStroke();
                fill(random(0, 40),random(205, 255),random(50, 255));
                ellipse(dotX,dotY, 10);
                pop();
        }
    }
}