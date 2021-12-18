status1="";
video="";
objects=[];
function preload(){
video=createVideo('video.mp4');
video.hide();
}


function draw(){
image(video,0,0,480,380);
if(status1!=""){
    objectDetector.detect(video,gotresult)
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:Objects are  Detected";
        document.getElementById("number_of_objects").innerHTML="Number of detected are ="+ objects.length;

        fill("pink");;
        percent=floor(objects[i].confidence*100)
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("salmon");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}

}

function setup(){
canvas=createCanvas(480,380);
canvas.center();

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelloaded(){
    console.log("modelloaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotresult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
objects=results;

}
}

