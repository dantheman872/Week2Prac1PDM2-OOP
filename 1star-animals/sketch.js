let animal1;
let animal2;
let animal3;
let bear, cat, monkey;

function preload(){

    bear = loadImage("assets/bear.jpg")
    cat = loadImage("assets/cat.jpg")
    monkey = loadImage("assets/monkey.jpg")
}

class Animal {

    x;
    y;
    image;

    constructor(x, y, image){

        this.x = x;
        this.y = y;
        this.image = image;
    }

    display(){

        image(this.image, this.x, this.y)
    }

    moveY(speed){

        this.y += speed
    }

    moveX(speed){

        this.x += speed
    }
}


function setup() {
    
    createCanvas(600,400)
    animal1 = new Animal(200,200, bear);
    animal2 = new Animal(250,200, cat);
    animal3 = new Animal(300,200, monkey);
}

function draw() {
    
    background(220)
    animal1.display();
    animal2.display();
    animal3.display();
}

function keyPressed() {

    if (key === "w") {

        animal1.moveY(-10);
        animal2.moveY(-10);
        animal3.moveY(-10);
    }

    if (key === "s") {
        
        animal1.moveY(10);
        animal2.moveY(10);
        animal3.moveY(10);
    }

    if (key === "a") {
        
        animal1.moveX(-10);
        animal2.moveX(-10);
        animal3.moveX(-10);
    }

    if (key === "d") {
        
        animal1.moveX(10);
        animal2.moveX(10);
        animal3.moveX(10);
    }
}