class Particle {
    constructor(x, y,radius, r,g,b,lifetime) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.baseVel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.color = color(r, b, g);
        this.radius = radius;
        this.zigStart = 0;
        this.terminal = false;
        this.turn = 0;
        this.lifetime = lifetime;
        this.Destroy = false;
    }
    update() {
        this.lifetime--;
        this.pos.add(this.vel);
        this.vel.add(this.acc);

         if ((this.vel.x > 2 || this.vel.x <-2) && !this.terminal) {
             this.baseVel= this.vel;
             if (this.baseVel.x > 0 && this.baseVel.y>0) {
                 //Linear Transformation matrix: [0 1, -1 0]
                 let temp = this.vel.x;
                 this.vel.x = this.vel.y;
                 this.vel.y = -temp;
                 this.turn = 1;
             }
             else if (this.baseVel.x > 0 && this.baseVel.y < 0) {
                 //Linear Transformation matrix: [0 -1, 1 0]
                 let temp = this.vel.x;
                 this.vel.x = -this.vel.y;
                 this.vel.y = temp;
                 this.turn = 0;
             }
             else if (this.baseVel.x < 0 && this.baseVel.y < 0) {
                 //Linear Transformation matrix: [0 1, -1 0]
                 let temp = this.vel.x;
                 this.vel.x = this.vel.y;
                 this.vel.y = -temp;
                 this.turn = 1;
             }
             else {
                 //Linear Transformation matrix: [0 -1, 1 0]
                 let temp = this.vel.x;
                 this.vel.x = -this.vel.y;
                 this.vel.y = temp;
                 this.turn = 0;
             }
             this.terminal = true;
             this.zigStart = frameCount;
             this.acc.x = 0;
             this.acc.y = 0;
         }
         else if (frameCount - this.zigStart > 50) {
             if (this.turn == 1) {
                 let temp = this.vel.x;
                 this.vel.x = -this.vel.y;
                 this.vel.y = temp;
                 this.turn = 0;
                 //console.log(this.vel.x);
             }
             else {
                 let temp = this.vel.x;
                 this.vel.x = this.vel.y;
                 this.vel.y = -temp;
                 this.turn = 1;
                 //console.log(this.vel.x);
             }
             this.zigStart = frameCount;
        }
        if (this.lifetime <= 0) {
            this.destroy = true;
        }
    }
    show() {
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }

}
