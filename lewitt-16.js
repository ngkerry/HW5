function setup() { 
createCanvas(400, 400);
} 
var x= 0;
var y= 0;
function draw() { 
background(25);
colorMode(RGB);
	
for(var x = 10; x < width; x += 10) {
for(var y = 10; y < height; y += 10) {
ellipse(x,y,6,6);
fill(random(0,344),random(20,300),random(90,120));
}
}
}
