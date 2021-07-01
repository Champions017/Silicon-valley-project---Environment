function level1(){
    background(bg1);
    dustbin.display();
    textAlign(CENTER)
    fill("lightgreen")
    textSize(30)
    stroke("blue")
    text("catch the banana peels before they get to the grass!",width/2,height-20)

    text("Bananas caught: " + litterScore,width/2,60)
    if(keyDown("left")){
      dustbin.x = dustbin.x - 10
    }
    if(keyDown("right")){
      dustbin.x = dustbin.x + 10
    }
    
    if(frameCount % 30 === 0){
      banana = createSprite(Math.round(random(0,width)),-40);
      banana.addImage(bananaImg);
      banana.velocityY = 5
      banana.scale = 0.2
      bananaG.add(banana)
    }
    if(bananaG.isTouching(dustbin)){
      bananaG[0].destroy();
      litterScore++
    }
}