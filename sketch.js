var player,shark,turtle,plastic;
var count = 0;

function preload(){
    
    pL = loadImage("plastic.png")
    fI = loadImage("fish.png");
    sI = loadImage("shark.png");
    tI = loadImage("turtle.png");
}

function setup(){
    player = createSprite(displayWidth/2,3*displayHeight/4,50,50);
    player.addImage("fi",fI);
    player.scale = 0.60;

}

function draw(){
    createCanvas(displayWidth,displayHeight);
    background("lightblue");
    if(keyWentDown(UP_ARROW)){
        count++; 
        player.y = player.y-10;
    }

    textSize(30);

    if(count===0){
        text("Welcome! Lets see how the ocean has evolved",displayWidth/4,displayHeight/4);
        text("Press Up Arrow to Play",displayWidth/3,displayHeight/2);
    }
    if(count===1){
        text("The ocean was very beautiful",displayWidth/3,displayHeight/2);
    }
    if(count===2){
       text("The fish had a wonderful eco-system",displayWidth/3,displayHeight/2);
    }
    if(count===3){
        text("They barely faced any interventions",displayWidth/3,displayHeight/2);
    }
    if(count===4){
        text("The fish's partners Mr.Turtle and Aunt Shark never complained ",displayWidth/4,displayHeight/2);

        shark = createSprite(displayWidth/3,5*displayHeight/7,50,50);
        shark.addImage("si",sI);
        turtle = createSprite(2*displayWidth/3,5*displayHeight/7,50,50);
        turtle.addImage("ti",tI);
    }
    if(count===5){
        text("They were living a very happy life",displayWidth/4,displayHeight/2);
    }
    if(count===6){
        textSize(20);
        text("Then came the year 1862, when some chemicals were discovered and plastics were invented",displayWidth/4,displayHeight/2);
        plastic = createSprite(displayWidth/4,displayHeight/4,50,50);
        plastic.addImage("P",pL);   
        plastic.scale = 0.5;     
    }
    if(count===7){
        textSize(30);
        text("The inventors warned the world about the wonder materials' harms",displayWidth/4,displayHeight/2);
    }
    if(count===8){
        textSize(30);
        text("But the world ignored the harms and ignorantly used plastics",displayWidth/4,displayHeight/2);
    }
    if(count===9){
        text("Then we reached 1950, when this material started becoming a problem",displayWidth/4,displayHeight/2);
    }
    if(count===10){
        textSize(25);
        text("By 1970, Mr.Turtle disappeared due to chemicals,plastics and sewage pollution",displayWidth/4,displayHeight/2);
        turtle.x = 3*displayWidth;
        
    }
    if(count===11){
        text("By the time we reached a new millennium with with hopes, the ocean and the aquatic ecosystem started choking",displayWidth/20,displayHeight/2);
        text("Aunt shark couldn't survive anymore in this journey",displayWidth/4,displayHeight/4);
        shark.x=3*displayWidth;
    }
    if(count===12){
        text("We are responsible for the state of the ocean, we are the reason why fishy might not be anymore",displayWidth/4,displayHeight/2);
    }
   // if(count===12){
    //    text("But this not the end",displayWidth/4,displayHeight/2);
   // }
    console.log(count);
    drawSprites();
}   

