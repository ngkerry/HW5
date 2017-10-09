var circle1 = 
{
x: 100, 
y: 100,
vx: 4,
vy: 5,
r: 10
};

var circle2 = 
{
x: 101, 
y: 101,
vx: 5,
vy: 6,
r: 11
};

var circle3 = 
{
x: 102, 
y: 102,
vx: 6,
vy: 7,
r: 12
};


function setup() 
{
createCanvas(400, 400);
}

function draw() 
{
background(255);
  
paint(circle1);
paint(circle2);
paint(circle3);
  
move(circle1);
move(circle2);
move(circle3);
  
bounce(circle1);
bounce(circle2);
bounce(circle3);
}

function paint(circle1) 
{
ellipse(circle1.x, circle1.y, circle1.r * 2, circle1.r * 2);
}

function move(circle1) 
{
circle1.x += circle1.vx;
circle1.y += circle1.vy;
}

function bounce(circle1) 
{
if (circle1.x > width || circle1.x < 0) 
{
circle1.vx = - circle1.vx;
}
if (circle1.y > height || circle1.y < 0) 
{
circle1.vy = - circle1.vy;
}
}
