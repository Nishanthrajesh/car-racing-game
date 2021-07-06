class player
{
    constructor()
    {
      this.distance=0,
      this.index=null,
      this.name=null
    }

   getCount()
   {
     var playercountref = data_base.ref('playercount')
       playercountref.on("value",function(data)
       {
          player_count=data.val(); 
       })
   }

   updatecount(count)
   {
     data_base.ref('/').update(
    {
      playercount:count
    })
   }

   updateName()
   {
     
     var playerlocation="players/player"+ this.index;
     data_base.ref(playerlocation).set(
       {
        name:this.name,
        distance:this.distance
       })
   }

   static getplayerinfo()
   {
    var playerinforef = data_base.ref('players')
    playerinforef.on("value",(data)=>
    {
      allplayers = data.val();
    })
   }
}