function setup() {
    createCanvas(1525, 725);
    colorMode(HSB);
}

function draw() {

    // put drawing code here
    background(0,0, 0);

    stroke(0);
    //textSize(20);
    //text(mouseX, 30, 30);
    //text(mouseY, 30, 50);
    //Torch
    //Filled to be brown
    point(20, 20);
    fill(30,100,58.8);
    strokeWeight(0);
    beginShape();
    vertex(710, 330);
    quadraticVertex(710, 630, 760, 720);
    //quadraticVertex(760, 720, 860, 700);
    quadraticVertex(815,630, 815, 330);
    vertex(710, 330);
    endShape();

    //Create the fire and have the color pulse/flicker
    //create dropplet shapes
    let startingSpot = { x: 760, y: 75 }
    let meetingSpot = { x: 760, y: 325 }

    fill(360, 100, 100)
    circles = 30;
    center = { x: 760, y: 180 }
    radius = 90;
    angle = Math.PI * 2 / circles;
    offset = 6 * Math.random();
    for (var i = 0; i < circles; i++) {

        xCircle = center.x + cos(angle * i) * radius;
        yCircle = center.y - sin(angle * i) * radius;

        ellipse(xCircle, yCircle, 10*(noise(offset), 10*(noise(i+offset))));
    }
    beginShape();
    vertex(startingSpot.x, startingSpot.y);
    bezierVertex(540, 276, meetingSpot.x, meetingSpot.y, meetingSpot.x, meetingSpot.y);
    bezierVertex(meetingSpot.x, meetingSpot.y, 970, 280, startingSpot.x, startingSpot.y);
    endShape();

    startingSpot = { x: 760, y: 125 }

    fill(3.3, 71.4, 100)
    center = { x: 760, y: 190 }
    radius = 70;
    angle = Math.PI * 2 / circles;
    offset = 5 * Math.random();
    for (var i = 0; i < circles; i++) {

        xCircle = center.x + cos(angle * i) * radius;
        yCircle = center.y - sin(angle * i) * radius;

        ellipse(xCircle, yCircle, 10 * (noise(offset), 10 * (noise(i + offset))));
    }
    beginShape();
    vertex(startingSpot.x, startingSpot.y);
    bezierVertex(540, 276, meetingSpot.x, meetingSpot.y, meetingSpot.x, meetingSpot.y);
    bezierVertex(meetingSpot.x, meetingSpot.y, 970, 280, startingSpot.x, startingSpot.y);
    endShape();

    startingSpot = { x: 760, y: 175 }
    fill(43, 90, 100)
    center = { x: 760, y: 230 }
    circles = 12;
    radius = 50;
    angle = Math.PI * 2 / circles;
    offset = 5 * Math.random();
    for (var i = 0; i < circles; i++) {

        xCircle = center.x + cos(angle * i) * radius;
        yCircle = center.y - sin(angle * i) * radius;

        ellipse(xCircle, yCircle, 9 * (noise(offset), 9 * (noise(i + offset))));
    }
    beginShape();
    vertex(startingSpot.x, startingSpot.y);
    bezierVertex(580, 276, meetingSpot.x, meetingSpot.y, meetingSpot.x, meetingSpot.y);
    bezierVertex(meetingSpot.x, meetingSpot.y, 930, 280, startingSpot.x, startingSpot.y);
    endShape();

    startingSpot = { x: 760, y: 225 }
    fill(60, 25, 97)
    center = { x: 760, y: 253 }
    circles = 20;
    radius = 40;
    angle = Math.PI * 2 / circles;
    offset = 5 * Math.random();
    for (var i = 0; i < circles; i++) {

        xCircle = center.x + cos(angle * i) * radius;
        yCircle = center.y - sin(angle * i) * radius;

        ellipse(xCircle, yCircle,  8* (noise(offset), 8 * (noise(i + offset))));
    }
    beginShape();
    vertex(startingSpot.x, startingSpot.y);
    bezierVertex(608, 276, meetingSpot.x, meetingSpot.y, meetingSpot.x, meetingSpot.y);
    bezierVertex(meetingSpot.x, meetingSpot.y, 900, 280, startingSpot.x, startingSpot.y);
    endShape();

    //circle of circles, size determined by noise



    }
    //if time, implement hidden images?
