//TO DO: Lifetime, Color Palette Tweaking, Click to Reset background/Particle System


let partSystem;
function setup() {
    createCanvas(1300, 700);
    partSystem = new particleSystem();
}

function draw() {
    noStroke();
    // put drawing code here
    background(0, 0, 0,.4); 
    partSystem.update();
    }
