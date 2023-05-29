function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
}

function modelLoded(){
    console.log("PoseNet Is Initialized");
}

function gotposes(results){
    if(results){
        console.log(results);
    }
}