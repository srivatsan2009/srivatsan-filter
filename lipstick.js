var nosex=0;
var nosey=0;
function preload() {
lipstick_image=
loadImage("https://i.postimg.cc/VNF25R3W/download-1.png");
}

function setup() {
canvas=createCanvas(400,300);
canvas.center();
video=createCapture(VIDEO);
video.size(400,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',getposes);
}

function draw() {
image(video,0,0,400,300);
fill(234,222,111);
stroke(0,212,124);
//strokeWeight(2);
//circle(nosex,nosey,30);
image(lipstick_image,nosex,nosey,500,600);
}

function take_snapshot() {
save("srivatsan's lipstick filter image.jpg");
}

function modelloaded() {
console.log("posenet model is initialised");
}

function getposes(results) {
if (results.length>0) {
console.log(results);
nosex=results[0].pose.nose.x-31;
nosey=results[0].pose.nose.y+19;
console.log("nose x="+ nosex);
console.log("nose y="+ nosey);
}
}