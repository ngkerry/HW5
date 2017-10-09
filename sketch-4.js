var circle = 
{
x: 100, 
y: 400,
vx: 0,
vy: -5,
r: 10
};

var circle2 = 
{
x: 160, 
y: 400,
vx: 0,
vy: -5,
r: 10
};

var circle3 = 
{
x: 170, 
y: 450,
vx: 2,
vy: -7,
r: 10
};


function setup() 
{
createCanvas(400, 400);
	
circle.h = random(360);
circle2.h = random(360);
circle3.h = random(360);
}

function draw() 
{
background(255);
  
paint(circle);
paint(circle2);
paint(circle3);
  
move(circle);
move(circle2);
move(circle3);
	
bounce(circle);
bounce(circle2);
bounce(circle3);
}

function paint(circle) 
{
ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) 
{
circle.x += random(-4,4);
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
circle.y = 450
}
}
