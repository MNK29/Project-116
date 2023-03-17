noseX = 0
noseY = 0

function preload(){
    mustache = loadImage("https://i.postimg.cc/DwwqSbNG/image.png")
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 400);
    image(mustache, noseX - 60, noseY - 10, 120, 70);
}

function modelLoaded(){
    console.log('Pose Net is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save('Mustache.png');
}