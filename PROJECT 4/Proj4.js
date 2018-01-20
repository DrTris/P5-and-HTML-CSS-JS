// MULTIPLE CLICKABLE BUTTONS WITH IDENTITY KNOWN !
var buttonArray=[];
function setup() {
  createCanvas(600, 600);
	background(10);
	stroke(255);
  colorMode(HSB);


	for (let i=0;i<50;i++){
    if(i%10===0){createP("");}
		buttonArray[i]=createButton(i+1);
	  buttonArray[i].id=i+1;
	  buttonArray[i].style("background-color:#000088;color:#ffffff;text-align:center;margin:6px;width:48px;height:30px;");
    buttonArray[i].mousePressed(function(e){console.log("Button "+this.id);buttPress(this.id)
    console.log(e.toElement.innerHTML+" is the inner HTML");
      console.log("The e param on event method "+e);
        console.log(e);
  });
	}

}

function buttPress(buttID){
  //console.log("You pressed button "+buttID);
  background(10);
  textSize(40);
  noStroke();
  fill(random(255),255,255);
  text("You pressed button labelled "+buttID,10,300)
};
