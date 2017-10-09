function setup() 
{ 
createCanvas(600, 600);
} 
var x1= 150;
var y2= 150;
var a= -130;
var b= 500;
var b2= 660;
function draw() 
{ 

stroke(0);
if(x1 < 400)
{
line(x1, 0, x1, height);
x1= x1 + 5
}
	
if(y2 < 400)
{
line(0, y2, width, y2);
y2= y2 + 5;
}
if(b2 > 0)
{
line(a, b, a + 120, b2);
a= a + 5;
b= b - 5;
b2= b + 160
}
}
