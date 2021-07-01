function level2F(){
    background(bg2);
    dustbin.visible = false;
    bot.visible = true;
    fert.visible = true
    //litterB.visible = true

    textSize(25)
    textFont("algerian")
    textAlign(CENTER)
    stroke("blue")
    fill("yellow")
    text("Fetch the things required for the plant to grow!",bot.x,camera.y + 300)

    if(keyDown("right")||keyDown("d")){
        bot.changeAnimation("right",botImg1)
        bot.x = bot.x + 8
    }
    if(keyDown("left")||keyDown("a")){
        bot.changeAnimation("left",botImg2)
        bot.x = bot.x - 8
    }
    if(bot.y > ground1.y - 150 && bot.y < ground1.y + 100 && bot.x < ground1.x + 620 && bot.x > ground1.x - 620){
        if(keyDown("space")){
            bot.velocityY = bot.velocityY - 13
        }
    }
    if(bot.y > ground2.y - 150 && bot.y < ground2.y + 100 && bot.x < ground2.x + 300 && bot.x > ground2.x - 300){
        if(keyDown("space")){
            bot.velocityY = bot.velocityY - 13
        }
    }
    if(bot.y > ground3.y - 150 && bot.y < ground3.y + 100 && bot.x < ground3.x + 620 && bot.x > ground3.x - 620){
        if(keyDown("space")){
            bot.velocityY = bot.velocityY - 13
        }
    }
    
    if(bot.y > ground4.y - 150 && bot.y < ground4.y + 100 && bot.x < ground4.x + 300 && bot.x > ground4.x - 300){
        if(keyDown("space")){
            bot.velocityY = bot.velocityY - 13
        }
    }

    if(bot.y > ground5.y - 150 && bot.y < ground5.y + 100 && bot.x < ground5.x + 620 && bot.x > ground5.x - 620){
        if(keyDown("space")){
            bot.velocityY = bot.velocityY - 13
        }
    }

    bot.velocityY = bot.velocityY + 2

    camera.x = bot.x
    camera.y = bot.y + 100

    if(bot.y > 1500){
        bot.y = height/2+50
        bot.x = 50
    }

    litterB.x = bot.x + 570
    litterB.y = camera.y - 240
    
    plantB.x = bot.x + 480
    plantB.y = camera.y -228

    PRB.x = bot.x + 390
    PRB.y = camera.y - 228

    Bmedal.x = bot.x + 300
    Bmedal.y = camera.y - 228

    Gmedal.x = bot.x + 210
    Gmedal.y = camera.y - 228

    if(bot.isTouching(seed)&&seed.x===50&&seed.y === ground2.y-200){
        seed.scale = seed.scale + 0.01
        if(seed.scale >= 0.4){
            seed.scale = 0.4
            seed.x = 0
            seed.y = ground1.y
            seed.scale = seed.scale - 0.01
            if(seed.scale = 0.2){
                seed.scale = 0.2
            }
        }
    }
    
    if(bot.isTouching(bottle)&&seed.y === ground1.y){
        bottle.scale = bottle.scale + 0.01
        if(bottle.scale >= 0.7){
          bottle.scale = 0.7
        }
        seed.changeAnimation("sap",sapImg)
    }
    if(bottle.scale === 0.7){
        bottle.y = 5000
    }
    else if(bot.isTouching(bottle)&&seed.y === ground2.y - 200){
        textSize(30)
        textFont("Algerian");
        fill("blue")
        stroke("yellow")
        text("Please get the seed first!",camera.x,camera.y - 200)
    }
    
    if(bot.isTouching(fert)&&bottle.y > 1000){
        fert.scale = fert.scale + 0.01
        if(fert.scale >= 0.4){
            fert.scale = 0.4
            fert.y = 2500
        }
    }
    if(fert.y > 2000){
        seed.changeAnimation("plant",plantImg)
        bot.x = seed.x + 100
        bot.y = seed.y - 50
        seed.scale = seed.scale + 0.01
        if(seed.scale >= 1){
            ASound.play();
            gameState = medal2
        }
    }
    if(bot.isTouching(fert)&&bottle.y < 1000){
        textSize(30)
        textFont("Algerian");
        fill("blue")
        stroke("yellow")
        text("Please get the watering can first!",camera.x,camera.y - 200)        
    }
    //if(bot.isTouching(fert)){
    //    fert.scale = fert.scale + 0.01
    //    if(fert.scale >= 0.4){
    //        fert.scale = 0.4
    //        //fert.y = bottle.y
    //    }
    //}
}