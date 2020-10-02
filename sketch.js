var player,shark,turtle;
var count = 0;
var gameState = 0 ;
var plasticG;

function preload(){
    
    pL = loadImage("plastic.png")
    fI = loadImage("fish.png");
    sI = loadImage("shark.png");
    tI = loadImage("turtle.png");
    bG = loadImage("bg.jpg");
    cN = loadImage("P.jpg");
}

function setup(){
    player = createSprite(displayWidth/2,3*displayHeight/4,50,50);
    player.addImage("fi",fI);
    player.scale = 0.60;

    shark = createSprite(displayWidth/3,5*displayHeight/7,50,50);
    shark.addImage("si",sI);
    turtle = createSprite(2*displayWidth/3,5*displayHeight/7,50,50);
    turtle.addImage("ti",tI);

    plasticG = new Group();
    k = new Group();
}

function draw(){
    createCanvas(displayWidth,displayHeight);
    background("lightblue");


    if(keyWentDown(UP_ARROW)){
        count++; 
        player.y = player.y-10;
    }

    if(gameState===0){

        
    
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
    
            
        }
        if(count===5){
            text("They were living a very happy life",displayWidth/4,displayHeight/2);
        }
        if(count===6){
            textSize(20);
            text("Then came the year 1862, when some chemicals were discovered and plastics were invented",displayWidth/4,displayHeight/2); 
            var plastic1 = createSprite(displayWidth/10,3*displayHeight/4,50,50);
            plastic1.addImage("P",pL);   
            plastic1.scale = 0.5;
            plasticG.add(plastic1);
            
            var plastic2 = createSprite(displayWidth/10,displayHeight/3,50,50);
            plastic2.addImage("P",pL);   
            plastic2.scale = 0.5;
            plasticG.add(plastic2);
    
            var plastic3 = createSprite(9*displayWidth/10,3*displayHeight/4,50,50);
            plastic3.addImage("P",pL);   
            plastic3.scale = 0.5;
            plasticG.add(plastic3);

            var plastic4 = createSprite(9*displayWidth/10,displayHeight/3,50,50);
            plastic4.addImage("P",pL);   
            plastic4.scale = 0.5;
            plasticG.add(plastic4);
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
            text("Then we reached 1950, when this material started becoming a problem",displayWidth/8,displayHeight/2);
        }
        if(count===10){
            textSize(25);
            text("By 1970, Mr.Turtle disappeared due to chemicals,plastics and sewage pollution",displayWidth/6,displayHeight/4);
            turtle.destroy();
            
        }
        if(count===11){
            textSize(20);
            text("By the time we reached a new millennium with with hopes, the ocean and the aquatic ecosystem started choking",displayWidth/20,displayHeight/8);
            text("Aunt shark couldn't survive anymore in this journey",displayWidth/4,displayHeight/4);
            shark.x = shark.x+ 5000000000000;
            shark.destroy();
        }
        if(count>11){
            background(bG);
        }
        if(count===12){
            text("Slowly, we are making it difficult for the fish to survive as well",displayWidth/6,displayHeight/4);
    
            var plastic5 = createSprite(displayWidth/4,displayHeight/2,50,50);
            plastic5.addImage("P",pL);   
            plastic5.scale = 0.5;
            plasticG.add(plastic5);
            
            var plastic6 = createSprite(3*displayWidth/4,displayHeight/2,50,50);
            plastic6.addImage("P",pL);   
            plastic6.scale = 0.5;
            plasticG.add(plastic6);
    
        }
        if(count === 13){

           
            gameState = 1;
            player.destroy();
            plasticG.destroyEach();
            
        }
        
    }
        if(gameState===1){
            background(30,144,255);
            text("Press Up arrow to continue",displayWidth/6,3*displayHeight/4);
            showStats();
        }
    
    
    console.log(count);
    drawSprites();
}   

function showStats(){
    if(count===14){
        textSize(20);
        text("And now we are in the present world where over 100 million acquatic creatures succomb to pollution.",displayWidth/20,displayHeight/20);
        text("1 in 3 marine mammal species get found entangled in litter, 12-14,000 tons of plastic are ingested by North Pacific fish yearly.",displayWidth/20,displayHeight/12);
        text("In the past 10 years, we’ve made more plastic than the last century. By 2050, the pollution of fish will be outnumbered by our dumped plastic",displayWidth/20,displayHeight/9);
        text("300 Million tons of plastic gets created yearly, and this weighs the same as the entire human population, and 50% is single-use only.",displayWidth/20,displayHeight/7);
        text("46% of the plastic items we create floats, it can take years of currents before ending up in the ocean's gyres.",displayWidth/20,displayHeight/5);

        var pI = createSprite(displayWidth/2,displayHeight/2,10,10);
        pI.addImage("c",cN);
        pI.scale = 0.6;
        k.add(pI);
    }

    if(count===15){
        textSize(40);
        text("Let us collectively reduce the ocean pollution",displayWidth/20,displayHeight/4);
        text("#SaveTheOcean       #SaveOurFish",displayWidth/4,displayHeight/8);
    }
    if(count===17){
        
        textSize(60);
        text("THANK YOU !!!",displayWidth/3,displayHeight/2);
        k.destroyEach();
    }
}

