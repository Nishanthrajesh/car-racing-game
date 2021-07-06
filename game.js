class game 
{
  constructor()
  {
    
  }

  GetState()
  {
    var gamestateref=data_base.ref('gamestate')
    gamestateref.on("value",function(data)
    {
      game_state=data.val()
    })
  }

  updatestate(state)
  {
    data_base.ref('/').update(
    {
        gamestate:state
    })
  }

  start()
  {
    if(game_state===0)
    {
      form1=new form()
      form1.display()
      player1=new player()
      player1.getCount()
    }

   car1=createSprite(100,200) 
   car1.addImage(img1);
   car2=createSprite(300,200)
   car2.addImage(img2);
   car3=createSprite(500,200)
   car3.addImage(img3);
   car4=createSprite(700,200)
   car4.addImage(img4);

   cars=[car1,car2,car3,car4]

  }

  play()
  {
    form1.title.hide();
    form1.greeting.hide();
    player.getplayerinfo()

    if(allplayers!=undefined)
      {
        var index = 0;
        var xpos = 275;
        var ypos;
        
        background(rgb(198,135,103))
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)

        for(var playr in allplayers)
        {
          index=index+1;
          xpos = xpos + 200
          ypos = displayHeight-allplayers[playr].distance
          cars[index-1].x = xpos;
          cars[index-1].y = ypos;
          console.log(player1.index);

          if(index === player1.index)
          {
            fill("red")
            ellipse(xpos,ypos,60,60)
            cars[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y;
          }
        }
        if(keyIsDown(UP_ARROW) && player1.index!= null)
        {
          player1.distance = player1.distance + 10
          player1.updateName()
        }
      }
      drawSprites();
  }

}