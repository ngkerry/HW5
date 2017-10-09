var circle = 
{
x: 100, 
y: 400,
vx: 0,
vy: -4,
r: 10
};

var circle2 = 
{
x: 160, 
y: 400,
vx: 0,
vy: -4,
r: 10
};


function setup() 
{
createCanvas(400, 400);
	
circle.h = random(360);
circle2.h = random(360);
}

function draw() 
{
background(255);
  
paint(circle);
paint(circle2);
  
move(circle);
move(circle2);
  
bounce(circle);
bounce(circle2);
}

function paint(circle) 
{
ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
	
}

function keyPressed() {
if (keyCode === UP_ARROW) {
circle.vy=circle.vy-2;
}
	
if (keyCode === DOWN_ARROW) 
{
circle.vy=circle.vy+2;
}
}

function move(circle) 
{
circle.y += circle.vy;
}


function bounce(circle) 
{
if (circle.x > width || circle.x < 0) 
{
circle.vx = circle.vx;
}
if (circle.y > height || circle.y < 0) 
{
circle.vy = circle.vy;
}
if (circle.y < 0)
{
circle.y = 400
}
}
