class Box{
    constructor(upperBoundX, upperBoundY, lowerBoundX, lowerBoundY, mass) {
        this.upper = createVector(upperBoundX, upperBoundY);
        this.lower = createVector(lowerBoundX, lowerBoundY);
        this.height = this.lower.y - this.upper.y;
        this.width = this.lower.x - this.upper.x;
        this.position = createVector(this.upper.x + this.width/2 , this.upper.y + this.height/2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.r = random(0, 365);
        this.g = random(100, 300);
        this.b = random(300, 365);

    }

    update() {
        fill(this.r,this.g,this.b)
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.upper.add(this.velocity);
        this.lower.add(this.velocity);
        if (this.upper.x < 2 || this.lower.x > width-2) {
            this.velocity.x *= -1;

        }
        if (this.lower.y > height-5 || this.upper.y < 5) {
            this.velocity.y *= -1;
        }
        if (this.lower.y > height + 4) {
            this.position.add(0, -height + 40);
            this.upper.add(0, -height + 40);
            this.lower.add(0, -height + 40);
        }
        if (this.velocity.y >= 8) {
            this.velocity.y = 8;
        }

    }
    show(){
        rect(this.position.x-this.width/2, this.position.y-this.height/2, this.width, this.height, this.height/10);
    }
    collision(otherBox) {
        //this.position.x = this.position.x;
        //Condition 1: Fully to the right
        //otherBox(left side is greater than this right side)
        //otherBox.upper.x > this.lower.x
        //Condition 2: Fully to the left
        //otherBox.lower.x < this.upper.x
        //Condition 3: Fully Below
        //other.upper.y > this.lower.y
        //Condition 4: Fully Above
        //other.lower.y < this.upper.y

        if (!(otherBox.lower.y < this.upper.y || otherBox.upper.y > this.lower.y || otherBox.lower.x < this.upper.x || otherBox.upper.x > this.lower.x)) {

            let temp = this.velocity.y;
            this.velocity.y = otherBox.velocity.y;
            otherBox.velocity.y = temp;
            temp = this.velocity.x;
            this.velocity.x = otherBox.velocity.x;
            otherBox.velocity.x = temp;
            //this.momentumTransfer(otherBox);
        }
    }
    addForce(force) {
        this.acceleration.add(force.div(this.mass));
    }
}