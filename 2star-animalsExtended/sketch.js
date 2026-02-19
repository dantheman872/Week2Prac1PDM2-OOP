let animal1, animal2, animal3;
let bear, cat, monkey;

function preload(){

    bear = loadImage("assets/bear.jpg")
    cat = loadImage("assets/cat.jpg")
    monkey = loadImage("assets/monkey.jpg")
}

function setup() {
    
    createCanvas(600,400)

    const topY = 170;

    const w = 360;
    const h = 220;

    animal1 = new Animal(120, topY, bear, 2, w, h);
    animal2 = new Animal(620, topY, cat, 1, w, h);
    animal3 = new Animal(340, 330, monkey, 0, w, h);
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

class Animal {

    #x;
    #y;
    #image;

    #dangerLevel;
    #w
    #h

    constructor(x, y, image, dangerLevel = 0, w = null, h = null){

        this.#x = x;
        this.#y = y;
        this.#image = image;
        this.setDangerLevel(dangerLevel);
        this.#w;
        this.#h;        
    }

    display(){

        let borderCol;
        let borderThickness;
        
        const pad = 6;
        noFill();
        stroke(borderCol);
        strokeWeight(borderThickness);

        image(this.image, this.x, this.y)
        
        rect(this.x, this.y, image.width)
    }

    moveY(speed){

        this.y += speed
    }

    moveX(speed){

        this.x += speed
    }
}