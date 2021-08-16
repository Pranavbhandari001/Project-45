

var bot,virus, Obstacle , ground , bots,Obstacles,Snakes,Viruses,Pines;






function preload(){

Snakes=loadImage("Snakes.png");

Viruses=loadImage("Virus.png");
Pines=loadImage("Pines.png");
Obstacles=loadImage("Obstacles.png");




}
function setup(){
    createCanvas(1000,400);
  bot = createSprite(250,300,90,90)  
  bot.shapeColor="red";



ground = createSprite(500,350,400,10);

}
function draw(){
background("purple");



ground.velocityX = -2;
if (ground.x < 0){
   ground.x = ground.width/2;
 }


 spawnObstacles();
spawnViruses();
   drawSprites();

}
 





function spawnObstacles(){
if (frameCount % 200 === 0){
    Obstacle = createSprite(1000,300,90,80);

var rand = Math.round(random(1,3))
switch(rand){
   case 1:Obstacle.addImage(Snakes)
   break;
   case 2:Obstacle.addImage(Pines)
   break;
   case 3:Obstacle.addImage(Obstacles);
   break;
   default:break;
}
Obstacle.scale = 0.5;
Obstacle.velocityX = -2;


}

};


function spawnViruses(){
 if(frameCount % 60 ===0) {
    virus = createSprite(800,150,50,50);
    virus.y = random(50,200);
    virus.velocityX=-5;
    virus.shapeColor="black";
    virus.lifetime = 200;
 }

}