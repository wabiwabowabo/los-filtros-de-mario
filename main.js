noseX=0;
noseY=0;

left_eyeX=0;
left_eyeY=0;

right_eyeX=0;
right_eyeY=0;


function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
  moustache = loadImage('https://i.postimg.cc/RFVcC18H/bigote-mario.png');
mario_hat = loadImage('https://i.postimg.cc/FRMxM8ZG/gorro-mario.png');
moustache_nose = loadImage('https://i.postimg.cc/nLQLp3JM/nariz-bigote-mario.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet está inicializado');
}

function gotPoses(results){
if(results.lenght > 0){
 console.log(results);
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
 left_eyeX = results[0].pose.leftEye.x-60;
  left_eyeY = results[0].pose.leftEye.y-100;
}
}

function draw() {
  image(video,0,0,300,300);
  image(moustache_nose, noseX, noseY, 40, 40)
  image(mario_hat, left_eyeX, left_eyeY, 100, 100)
}

function take_snapshot(){ 
     
  save('myFilterImage.png');
}