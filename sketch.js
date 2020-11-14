//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  background(46,139,87);
  createCanvas(500, 500);

  
  
  dog = createSprite(200,200,200,200);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock = database.ref('food');
  foodStock.on("value", readStock);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImage);

  }
  
}


function draw() {  

  drawSprites();
  //add styles here
  textSize(10);
  fill(blue);
  stroke(5);

}

function readStock(data){

foodS = data.val();


}

function writeStock(x){

database.ref('/').update({
foodS = x

})

}


