leftWristX=0
rightWristX=0
noseX=0
noseY=0 
difference=0
function setup(){
    video = createCapture(VIDEO)
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(570,150)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
 }
 function modelLoaded(){
 console.log("PoseNet is initilized")
 }
 function gotposes(){
 if(results.length > 0){
 console.log(results)
 noseX=results[0].pose.nose.x;
 noseY=results[0].pose.nose.y;
 console.log("NoseX ="+ noseX+ "NoseY ="+ noseY )
 rightWristX=results[0].pose.rightWrist.x;
 leftWristX=results[0].pose.leftWrist.x;
 difference=floor(leftWristX-rightWristX)
 console.log("leftwristX ="+leftWristX+"rightwirstX"+rightWristX+"difference="+difference)
}
 }
 
function draw(){
    background("grey") 
    document.getElementById("text_size").innerHTML="The Width And Height of Text will be:-"+difference+"px"
    fill("orange")
    text("Happy Hanuman Jayati",50,400)
}