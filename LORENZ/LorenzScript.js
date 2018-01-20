//TWG 6th Jan 2018
var x=0.1;
var y=2;
var z=3;
const rho= 28; // constants as per Wikipedia page
const sigma=10;
const beta=8/3;
var dx,dy,dz
var t=0.01; // 'time'
var d; //d is just a <DIV> at bottom of page
       // has to be global to work in draw()
function setup() {
    canv=createCanvas(610, 620,WEBGL);
    // Using p5 DOM here
    canv.id("canvas");//for CSS
    d=createDiv("");d.id=("p5div");
    //d.style("background:#333333;  width:350px ; height:50px; font-size:15px ; color:orange;")//style
    d.position(10, 850);

    background(20,20,20);
    stroke(255);
    strokeWeight(1);
    normalMaterial();
    colorMode(HSB);

}

function draw() {
    //NO need to use canv variable (only needed for styling)
    ambientLight((((frameCount/10)%255)),100,100);
    translate(x*7,y*6,z*6);
    // rotateY(PI);
    // rotateX(PI/2);
    // rotateZ(PI/4);
    sphere(1); // no point function in WEBGL context!!! - yet

    dx=((sigma*(y-x))*t);
    dy=((x*(rho-z)-y)*t);
    dz=((x*y-beta*z)*t);

    x+=dx;y+=dy;z+=dz;

    d.html("X="+x+"<br />"+"Y="+y+"<br />"+"Z="+z);

}
