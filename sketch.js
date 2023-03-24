var data_base;
var game_state = 0;
var player_count;
var game1;
var player1,form1;
var allplayers;
var car1,car2,car3,car4,cars;
var img1,img2,img3,img4,track;
var i = 2

function preload()
{
  img1 = loadImage("car1.png");
  img2 = loadImage("car2.png");
  img3 = loadImage("car3.png");
  img4 = loadImage("car4.png");
  track = loadImage("track.jpg");
}

function setup()
{
  createCanvas(displayWidth-20,displayHeight-30);
  data_base = firebase.database();
  game1 = new game()
  game1.GetState();
  game1.start();
}

function draw()
{
  if(player_count===i)
  {
    game1.updatestate(1)
  }
  
  if(game_state===1)
  {
    clear();
    game1.play()
  }
}
