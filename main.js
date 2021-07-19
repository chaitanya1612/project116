mushtacheX = 0;
mushtacheY = 0;
function preload(){
//mushtache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    
}

function modelLoaded(){
console.log("pose net is initialized");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
mushtacheX = results[0].pose.mushtache.x;
mushtacheY = results[0].pose.mushtache.y;
console.log("mushtache x="+result[0].pose.mushtache.x);
console.log("mushtache y="+result[0].pose.mushtache.y);

}
}

function draw(){
image(video,0,0,300,300);
image(mushtache, mushtacheX, mushtacheY, 30, 30);
}

function take_snapshot(){
save("mushtache image.png");
}