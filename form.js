class form
{
 constructor()
 {
  this.title = createElement('h1')
  this.input = createInput("name")
  this.button = createButton("play")
  this.greeting=createElement('h3')
  this.reset=createButton("reset");
 }

 display()
 {
  
   this.reset.position(displayWidth-100,20)
   
   this.title.html("welcome to car racing game")
   this.title.position(500,200)

   this.input.position(600,350);

   this.button.position(650,380);

   this.button.mousePressed(()=>
   {
     this.button.hide()
     this.input.hide()
     player_count=player_count+1;
     player1.index = player_count;
     player1.name = this.input.value()
     player1.updatecount(player_count)
     player1.updateName()
     this.greeting.position(600,350)
     this.greeting.html("Hello "+player1.name)
   })

   this.reset.mousePressed(()=>
   {
     game1.updatestate(0);
     player1.updatecount(0);
   })

 } 

}