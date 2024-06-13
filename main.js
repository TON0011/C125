noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canavs = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose, gotPoses');
}

function modelLoaded() {
    console.log('Pose Is Intitialized!')
}

function draw() {
    background('#969A97');
    
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px";
    Fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.X
        noseY = results[0].pose.nose.Y
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.RightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " difference);

    }
}