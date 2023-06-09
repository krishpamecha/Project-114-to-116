function preload()
{

}

function setup()
{
    canvas=createCanvas(500, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(500, 400);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function take_snapshot()
{
    save('picture.png')
}
function modelLoaded()
{
    console.log('Posenet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    console.log(results);
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" + results[0].pose.nose.y);
}