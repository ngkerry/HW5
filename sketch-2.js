var circle1 = 
{
x: 101, 
y: 101,
vx: 4,
vy: 5,
h: 10,
r: 10,
};

var circle2 = 
{
x: 102, 
y: 102,
vx: 5,
vy: 6,
r: 11,
h: 40,
};

var circle3 = 
{
x: 103, 
y: 103,
vx: 6,
vy: 7,
r: 11,
h: 80
};


function setup() 
{
createCanvas(400, 400);
}

function draw() 
{
background(255);
colorMode(HSB)
paint(circle1);
fill(circle1,100,100);
paint(circle2);
fill(circle2,100,100);
paint(circle3);
fill(circle3,100,100);
  
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
colorMode(HSB);
fill(circle1.h,100,100);
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
