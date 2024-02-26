class particleSystem {
    constructor() {
        this.position = createVector(mouseX, mouseY);
        this.lastParticle = 1;
        this.shotSpeed = 2;
        this.particles = [];
    }
    update() {
        this.position = createVector(mouseX, mouseY);
        //Set angle for a particle
        if (frameCount % 1 == 0) {
            let p = new Particle(this.position.x, this.position.y, 10, random(200, 300), random(150, 200), random(200, 300), random(200, 300));
            p.acc.x = cos(random(-90,90))/5;
            p.acc.y = sin(random(-90,90))/5;
            this.lastParticle *= -1;
            this.particles.push(p);
            
        }
        fill(0,0,0);
        ellipse(mouseX, mouseY, 30, 30);
        //Push the particle
        //circle where the mouse is at the center

        for (let particle of this.particles) {
            particle.show();
            particle.update();
        }
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
               
        

    }
}
