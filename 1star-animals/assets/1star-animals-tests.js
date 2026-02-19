import { TestResults, advanceToFrame, canvasStatus, getShapes, substituteDraw, testClassIsDefined, testClassMethodIsDefined, testExpectedClassConstructorArgs, testExpectedClassMethodArgs } from "../../testing/test-utils.js";

/**
 * A hacky way to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) { // p5.js has loaded i.e. drawn a canvas
        clearInterval(loadTimer); // Stop the timer
        runTests(canvases[0]); // Run the tests below
    }
}

//#region - Exercise specific test functions
function functionalityTests(resultsDiv) {
    loadImage("assets/bear.jpg", (img) => loadSuccess(img, resultsDiv), (error) => loadFail(error, resultsDiv));
}

function loadSuccess(img, resultsDiv) {
    let animal;
    try {
        animal = new Animal(0, 0, img);
        TestResults.addPass("Successfully created an Animal object at 0, 0 with the image file assets/bear.jpg");
    } catch (e) {
        TestResults.addFail(`Unable to create an Animal object at 0, 0 with the image file assets/bear.jpg. There is probably something wrong in the constructor.`);   
    }
    finally {
        TestResults.display(resultsDiv);
    }
    if (animal) {
        try {
            testDisplay(animal, img);
        } catch (e) {
            TestResults.addFail(`An error occured while testing the <code>display()</code> method: ${e}`);
        }
    
        TestResults.display(resultsDiv);
    }
}

function testMoveX(animal, testImg) {
    // x and y should be private attributes so unable to test directly
    const imgObj = testImg.img;
    let startX = testImg.x;
    let startY = testImg.y;
    // move right 1 (positive)
    animal.moveX(1);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX + 1 && s.y === startY) {
                TestResults.addPass("<code>moveX(1)</code> moves the animal right by 1 pixel.");
            }
            else {
                TestResults.addFail(`<code>moveX(1)</code> should add 1 to the animal's x coordinate. The y coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move right 3 (positive)
    animal.moveX(3);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX + 3 && s.y === startY) {
                TestResults.addPass("<code>moveX(3)</code> moves the animal right by 3 pixels.");
            }
            else {
                TestResults.addFail(`<code>moveX(3)</code> should add 3 to the animal's x coordinate. The y coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move left 1 (negative)
    animal.moveX(-1);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX - 1 && s.y === startY) {
                TestResults.addPass("<code>moveX(-1)</code> moves the animal left by 1 pixel.");
            }
            else {
                TestResults.addFail(`<code>moveX(-1)</code> should subtract 1 from the animal's x coordinate. The y coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move left 3 (negative)
    animal.moveX(-3);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX - 3 && s.y === startY) {
                TestResults.addPass("<code>moveX(-3)</code> moves the animal left by 3 pixels.");
            }
            else {
                TestResults.addFail(`<code>moveX(-3)</code> should subtract 3 from the animal's x coordinate. The y coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
}

function testMoveY(animal, testImg) {
    // x and y should be private attributes so unable to test directly
    const imgObj = testImg.img;
    let startX = testImg.x;
    let startY = testImg.y;
    // move down 1 (positive)
    animal.moveY(1);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX && s.y === startY + 1) {
                TestResults.addPass("<code>moveY(1)</code> moves the animal down by 1 pixel.");
            }
            else {
                TestResults.addFail(`<code>moveY(1)</code> should add 1 to the animal's y coordinate. The x coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move down 3 (positive)
    animal.moveY(3);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX && s.y === startY + 3) {
                TestResults.addPass("<code>moveY(3)</code> moves the animal down by 3 pixels.");
            }
            else {
                TestResults.addFail(`<code>moveY(3)</code> should add 3 to the animal's y coordinate. The x coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move up 1 (negative)
    animal.moveY(-1);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX && s.y === startY - 1) {
                TestResults.addPass("<code>moveY(-1)</code> moves the animal up by 1 pixel.");
            }
            else {
                TestResults.addFail(`<code>moveY(-1)</code> should subtract 1 from the animal's y coordinate. The x coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
    // move up 3 (negative)
    animal.moveY(-3);
    background(255); // should cover anything in draw
    animal.display();
    // advanceToFrame(frameCount + 1);
    for (const s of getShapes()) {
        if (s.type === IMAGE && s.img === imgObj) {
            if (s.x === startX && s.y === startY - 3) {
                TestResults.addPass("<code>moveY(-3)</code> moves the animal up by 3 pixels.");
            }
            else {
                TestResults.addFail(`<code>moveY(-3)</code> should subtract 3 from the animal's y coordinate. The x coordinate should stay the same. Found that the animal's position changed by ${s.x - startX} on the x axis and ${s.y - startY} on the y axis. Note: this method is testing by calling <code>display()</code> and checking the location of the displayed image. If the <code>display()</code> test is also failing, fixing that issue may fix this one!`);
            }
            startX = s.x;
            startY = s.y;
        }
    }
}

function testDisplay(animal, img) {
    console.log(img);
    // Try display
    background(255);
    animal.display();
    // advanceToFrame(frameCount+1); NOT advancing avoids clash between draw() and tests
    const shapes = getShapes();
    // Check if shapes contains the image just added - x, y and img object should be the same
    let matchFound = false;
    for (const s of shapes) {
        if (s.type === IMAGE && s.x === 0 && s.y === 0 && s.img === img) {
            matchFound = true;
            testMoveX(animal, s);
            testMoveY(animal, s);
            break;
        }
    }
    if (matchFound) {
        TestResults.addPass("<code>display()</code> displays the <code>Animal</code>'s image at its coordinates.");
    } else {
        TestResults.addFail("<code>display()</code> does not appear to display the <code>Animal</code>'s image at its coordinates. The test assumes that the default <code>imageMode</code> is used. Unable to test the <code>moveX</code> and <code>moveY</code> methods until <code>display()</code> meets the specifications.");
    }
}

function loadFail(_, resultsDiv) {
    TestResults.addFail(`Error loading assets/bear.jpg. This file should be in the assets folder. Perhaps it has been deleted or moved?`);
    TestResults.display(resultsDiv);
}
//#endregion

/**
 * Run all tests.
 * @param {HTMLElement} canvas The HTML canvas created by p5.js
 */
async function runTests(canvas) {
    // SETUP - don't edit
    canvas.style.pointerEvents = "none"; // prevents p5.js from responding to mouse events independent of the tests
    substituteDraw(); 
    const resultsDiv = document.getElementById("results");
    for (const e of canvasStatus.errors) {
        TestResults.addFail(`In frame ${frameCount}, ${e}`);
    }
    // END SETUP

    // YOUR TESTS HERE. Write unit test functions then use TestResults static methods to show test results e.g.:
    // Class defined
    if (testClassIsDefined("Animal")) {
        TestResults.addPass("The <code>Animal</code> class is defined.");
        // Constructor args coorect
        if (testExpectedClassConstructorArgs(Animal, 3)) {
            TestResults.addPass("The <code>Animal</code> constructor takes 3 arguments.");
            // display() defined
            if (testClassMethodIsDefined(Animal, "display")) {
                TestResults.addPass("The <code>display()</code> method exists.");
                // display() arg number
                if (testExpectedClassMethodArgs(Animal, "display", 0)) {
                    TestResults.addPass("The <code>display()</code> method takes 0 arguments.");
                } else {
                    TestResults.addFail(`The <code>display()</code> method takes ${Animal.prototype["display"].length} arguments. 0 were expected.`);
                }
            } else {
                TestResults.addFail("The <code>display()</code> method does not exist. If this test result is unexpected, check that you have spelled the method name exactly as specified.")
            }
            // moveX() defined
            if (testClassMethodIsDefined(Animal, "moveX")) {
                TestResults.addPass("The <code>moveX()</code> method exists.");
                // display() arg number
                if (testExpectedClassMethodArgs(Animal, "moveX", 1)) {
                    TestResults.addPass("The <code>moveX()</code> method takes 1 argument.");
                } else {
                    TestResults.addFail(`The <code>moveX()</code> method takes ${Animal.prototype["moveX"].length} arguments. 1 was expected.`);
                }
            } else {
                TestResults.addFail("The <code>moveX()</code> method does not exist. If this test result is unexpected, check that you have spelled the method name exactly as specified.")
            }
            // moveY() defined
            if (testClassMethodIsDefined(Animal, "moveY")) {
                TestResults.addPass("The <code>moveY()</code> method exists.");
                // display() arg number
                if (testExpectedClassMethodArgs(Animal, "moveY", 1)) {
                    TestResults.addPass("The <code>moveY()</code> method takes 1 argument.");
                } else {
                    TestResults.addFail(`The <code>moveY()</code> method takes ${Animal.prototype["moveY"].length} arguments. 1 was expected.`);
                }
            } else {
                TestResults.addFail("The <code>moveY()</code> method does not exist. If this test result is unexpected, check that you have spelled the method name exactly as specified.")
            }
            functionalityTests(resultsDiv);
        } else {
            TestResults.addFail(`The <code>Animal</code> constructor takes ${Animal.length} arguments. 3 were expected (see the specification).`);
        }
    } else {
        TestResults.addWarning("The <code>Animal</code> class has not been implemented so unable to run tests. If you think you have implemented the class, make sure its name matches the specification <strong>exactly</strong>.");
    }
    
    // This statement should be last - displays the messages added above
    TestResults.display(resultsDiv);
}

// Calls waitForP5() every half second until p5.js finishes loading
const loadTimer = setInterval(waitForP5, 500);
