function reset(){

    litterScore = 0
    oilScore = 0
    trashScore = 0
    PScore = 0
    LScore = 8
    bottle.x = ground4.x + 200
    bottle.y = ground4.y - 200
    bottle.scale = 0.4

    fert.x = ground1.x - 1000
    fert.y = ground1.y + 900
    fert.scale = 0.1

    seed.x = 50
    seed.y = ground2.y - 200
    seed.scale = 0.2

    litterB.changeAnimation("grey")
    plantB.changeAnimation("grey")
    PRB.changeAnimation("grey")
    Bmedal.changeAnimation("grey")
    Gmedal.changeAnimation("grey")
    seed.changeAnimation("seed")
    Gmedal.scale = 0.5
    Bmedal.scale = 0.5
    PRB.scale = 0.5
    plantB.scale = 0.5
    litterB.scale = 0.5

    PRB.x = camera.x
    PRB.y = camera.y - 170

    litterB.x = PRB.x - 240
    litterB.y = PRB.y

    plantB.x = PRB.x - 120
    plantB.y = PRB.y

    Bmedal.x = PRB.x + 120
    Bmedal.y = PRB.y

    Gmedal.x = PRB.x + 240
    Gmedal.y = PRB.y

    gameState = intro
    ship.visible = false
    ball.visible = false
    bin.visible = false
    ground1.visible = false;
    ground2.visible = false;
    ground3.visible = false;
    dustbin.visible = false;
    bot.visible = false;
    bag1.visible = false
    bag2.visible = false
    bag3.visible = false
    bag4.visible = false
    bag5.visible = false
    bag6.visible = false
    bag7.visible = false
    bag8.visible = false

    rect1.visible = false
    rect2.visible = false
    rect3.visible = false
    rect4.visible = false
    rect5.visible = false
    rect6.visible = false
    rect7.visible = false
    rect8.visible = false
    rect9.visible = false
    rect10.visible = false
    rect11.visible = false
    rect12.visible = false

    ball.x = 100
    ball.y = height/2

    bag1.x = rect1.x + 25
    bag1.y = height/2

    bag2.x = rect2.x,
    bag2.y = rect2.y + 25

    bag3.x = rect3.x - 25
    bag3.y = height/2

    bag4.x = rect4.x,
    bag4.y = rect4.y - 25

    bag5.x = rect5.x + 30
    bag5.y = height/2

    bag6.x = rect6.x
    bag6.y = rect6.y + 25

    bag7.x = rect7.x - 30
    bag7.y = height/2

    bag8.x = rect8.x
    bag8.y = rect8.y - 25

}