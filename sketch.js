var weights = [34,56,65,23,68,19,20]

function weight(){
 var sum = weights[0] + weights[1] + weights[2] + weights[3] + weights[4]+ weights[5] + weights[6]
var avg = sum/weights.length;
console.log(avg)
}

function setup() 
{
  createCanvas(400,400);

  weight()

}



function draw() 
{
background(51);

}

