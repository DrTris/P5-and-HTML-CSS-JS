var rSlider, rSlider2, rSlider3;

function setup() {
    createCanvas(600, 600, WEBGL);

    background(0);

    //sliders NEED INTEGERS
    rSlider = createSlider(1, 24, 12);
    rSlider.position(80, 710);
    rSlider2 = createSlider(1, 16,12);
    rSlider2.position(220, 710);
    rSlider4 = createSlider(1,100,50);
    rSlider4.position(365, 710);
    rSlider3 = document.getElementById("Slider3");
    console.log(rSlider3);

}
//NOTE NORMAL TEXT COMMANDS DONT WORK IN 3D
var theta = 0;

function draw() {

    background(0);
    stroke(255);
    //fill(155,0,0);
    ambientLight(150,50,0,10);
    //pointLight(150, 150, 150, mouseX, mouseY,200);
    directionalLight(255,255,255,1,0,0);
    ambientMaterial(255);
    rotateX(theta * .5);
    rotateY(theta);
    rotateZ(theta*2);
    let scaleFactor=map(rSlider4.value(),1,100,0.1,2)
    scale(scaleFactor);
    theta += 0.01;
    cylinder(10,380,8,2);
    box(450,5,5);
    box(5,450,5);
    box(5,5,450);
    sphere(rSlider3.value, rSlider2.value(), rSlider.value());
    torus(250,20,18,5)

    //console.log(rSlider3.value);
}
