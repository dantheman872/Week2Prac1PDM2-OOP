let animal1;

function setup() {
    // TODO create the canvas
    animal1 = new Animal(); // TODO fill in the parameters
}

function draw() {
    // TODO draw the background
    //animal1.display();
}

function keyPressed() {
    // TODO move the animal in response to the WASD keys
    if (key === "w") {
        animal1.moveY(-10);
    } // etc
}