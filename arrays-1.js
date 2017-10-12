var sizes = [40, 70, 90, 40, 200, 180, 60, 60];

function setup() 
{
createCanvas(2500, 300);

noStroke();
    
for (var i = 0; i < sizes.length; i += 1) 
{
fill(sizes[i]);
ellipse(30+i*200, height/2, sizes[i], sizes[i]);
}
}
