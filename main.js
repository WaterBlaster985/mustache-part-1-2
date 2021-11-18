noseX=0;
noseY=0;
function preload(){
    mustache_pick=loadImage('https://i.postimg.cc/m2J3kDtg/sus.png');
}
function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300, 300);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log("results");
        noseX= results[0].pose.nose.x-22.5;
        noseY= results[0].pose.nose.y+5;
        console.log("noseX");
        console.log("noseY");
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache_pick, noseX, noseY, 50, 30);
}
function take_snapshot(){
    save(myfilterimage.png);
}

