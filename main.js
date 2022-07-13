noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

console.log('This website is made by Bharat');

function setup(){
    canvas= createCanvas(400, 400);
    video= createCapture(VIDEO);
    video.size(400,400);
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is Initialized!');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+ noseX + "noseY="+ noseY);
leftWristX=results[0].pose.leftWrist.x; 
rightWristX=results[0].pose.rightWrist.x;
difference= floor(leftWristX - rightWristX);
console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
}
}

function draw(){
    background('#FFFFFF');
    document.getElementById("square_side").innerHTML="Side of the square is:" +difference+"px";
    fill('#00FFFF');
    stroke('#00FFFF');
    square(noseX, noseY, difference);

}

