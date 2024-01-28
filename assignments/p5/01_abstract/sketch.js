let pongStuff = [];

function setup() {
    // put setup code here
    createCanvas(1500, 700)
    colorMode(HSB);

    //Create Pong Set up
    //Ball     : ellipse(750, 175, 10, 10)
    let ball = new Ball(750, 175, 4, -2, 10);
    //Paddle1  : rect(640, 75, 20, 50)
    let paddle1 = new Paddle(640, 75, ball);
    //Paddle2  : rect(840, 75, 20, 50)
    let paddle2 = new Paddle(840, 75, ball);

    //Create Array of Pong Set up
    pongStuff[0] = ball;
    pongStuff[1] = paddle1;
    pongStuff[2] = paddle2;
}

function draw() {
    // put drawing code here
    background(0, 0, 100);

    //Neck Line (Arcs?)
    let p1 = { x: 1200, y: 500 }; 
    let p2 = { x: 850, y: 465 };
    let p3 = { x: 1000, y: 695 }; //Endpoint
    let p4 = { x: 2000, y: 400 };

    curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
    curve(1500 - p1.x, p1.y, 1500 - p2.x, p2.y, 1500 - p3.x, p3.y, 1500 - p4.x, p4.y);

    //Head
    stroke(0);
    ellipse(750, 250, 450, 500);

    //Brain Circle
    stroke(351,100,86)
    ellipse(750, 150, 370, 280);

    //Pong Arena
    stroke(0);
    rect(625, 50, 250, 200)

    for (let i = 0; i < pongStuff.length; i++) {
        pongStuff[i].update();
    }
    fill(0);
    textSize(50);
    text('   Must Be Games\n     on the Brain \n By: Nathan Payson', 20, 60)
    fill(255);

/*    //Bouncing Ball
    stroke(0);
    ellipse(750, 175, 10, 10)

    //paddles
    stroke(0);
    rect(640, 75, 20, 50)
    rect(840, 75, 20, 50)
*/
}

//Paddle Class

class Paddle {
    constructor(x,y,target){
        this.position = createVector(x, y);
        this.velocity = createVector(0, 2); //Target is a Ball Object
        this.target = target;
        console.log(this.position.x)
        console.log(this.position.y)
    }

    update() {
        if (this.position.y > 200) {
            if (this.target.velocity.y > 0 || this.target.position.y > 200) {
                this.velocity.y = 0;
            }
            else {
                this.velocity.y = 2;
            }
            
        }
        if (this.target.position.y > this.position.y && this.velocity.y > 0) {
            this.position.add(this.velocity);
        }
        else if (this.target.position.y < this.position.y && this.velocity.y < 0) {
            this.position.add(this.velocity);
        }
        else {
            this.velocity.y *= -1;
            this.position.add(this.velocity);
        }

        console.log(this.position.x);
        fill(0);
        let paddle = rect(this.position.x, this.position.y, 20, 50);
        fill(255);
    }
}
//Array of 2 Paddles

//Pong Ball Class

class Ball {
    constructor(posX, posY, velX, velY, size) {
        this.position = createVector(posX, posY);
        this.velocity = createVector(velX, velY);
        this.size = size;
    }
    update() {
        if (this.position.x < 660 || this.position.x > 840) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 50 || this.position.y > 250) {
            this.velocity.y *= -1;
        }
        this.position.add(this.velocity);
        fill(0);
        ellipse(this.position.x, this.position.y, this.size, this.size);
        fill(255);
    }
}
//Fill Titles
//Title Work
