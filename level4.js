function level4F(){
    background(bg4)
    textSize(35)
    textFont("castellar")
    textAlign(CENTER)
    fill("white")
    stroke("blue")
    text("Droplets caught: " + oilScore,width/2,100)
    textSize(25)
    textFont("algerian")
    fill("yellow")
    text("Catch 30 drops of oil but beware of the water!",width/2,height-50)
    if(frameCount % 20 === 0){
        oil = createSprite(Math.round(random(50,width-50)),-40)
        oil.addImage(oilImg)
        oil.velocityY = 10
        oil.scale = 0.2
        oilG.add(oil)

    }
    if(frameCount % 200 === 0){
        water = createSprite(Math.round(random(50,width-50)),-40);
        water.addImage(waterImg)
        water.velocityY = 10
        water.scale = 0.2
        waterG.add(water)
    }
    if(keyDown("left")){
        ship.changeAnimation("left",shipImg2)
        ship.x = ship.x - 8
    }
    if(keyDown("right")){
        ship.changeAnimation("right",shipImg1)
        ship.x = ship.x + 8
    }
    if(oilG.isTouching(ship)){
        oilG[0].destroy();
        oilScore++
    }
    if(waterG.isTouching(ship)){
        //waterG[0].velocityY = 0
        oilScore = 0;
        fill("red")
        stroke("yellow")
        textAlign(CENTER)
        textFont("bahnscrift")
        text("Uh oh! You touched the water!\n\nDont worry, you can try again!",width/2,height/2)
        //waterG[0].destroy()
    }
    
    else{
        waterG.setVelocityYEach = 10
    }
}