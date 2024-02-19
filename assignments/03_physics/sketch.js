let boxes = [];
let numBoxes = 10;
function setup() {
    createCanvas(600, 600);
/*    let box = new Box(200, 200, 300, 300, 2)
    box.velocity.x = 5;
    box.velocity.y = 3;
    boxes.push(box);
    let box2 = new Box(400, 400, 500, 500, 2)
    box2.velocity.x = 2;
    box2.velocity.y = 6;
    boxes.push(box2);
    let box3 = new Box(400, 100, 500, 200, 2)
    box3.show();
    box3.velocity.x = 5;
    box3.velocity.y = 1;
    boxes.push(box3);*/
    for (let i = 0; i < numBoxes; i++) {
        for (let j = 0; j < numBoxes; j++) {
            let xUpper = random(i * (width / numBoxes), i * (width / numBoxes) + (width / numBoxes / 2));
            let yUpper = random(j * (height / numBoxes), j * (height / numBoxes) + (height / numBoxes / 2));
            box = new Box(xUpper, yUpper, xUpper + (width / numBoxes / 4), yUpper + (height / numBoxes / 4), 5);
            box.velocity.x = random(-5, 5);
            box.velocity.y = random(-5, 5);
            box.addForce(createVector(0,box.mass*0.05));
            boxes.push(box);
        }
    }
}

function draw() {
    // put drawing code here
    background(365, 2);
    noStroke();
    for (let box of boxes) {
        box.update();
        box.show();
        for (let box2 of boxes) {
            if (box2 != box) {
                box.collision(box2);
            }
        }
    }
}


//Bouncing around the canvas
