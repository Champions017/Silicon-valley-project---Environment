function level3F(){
    background(bg3)
    //litterB.visible = true
    //plantB.visible = true
        
    if(keyDown("left")||keyDown("a")){
        ball.x = ball.x - 6
    }
    if(keyDown("right")||keyDown("d")){
        ball.x = ball.x + 6
    }
    if(keyDown("up")||keyDown("w")){
        ball.y = ball.y - 6
    }
    if(keyDown("down")||keyDown("s")){
        ball.y = ball.y + 6
    }

    if(ball.isTouching(rectG)){
        ball.x = 100
        ball.y = height/2
    }
    if(ball.isTouching(bag1)){
        PScore++
        LScore--
        bag1.x = width/2
        bag1.y = height/2
    }
    if(ball.isTouching(bag2)){
        PScore++
        LScore--
        bag2.x = width/2
        bag2.y = height/2
    }
    if(ball.isTouching(bag3)){
        PScore++
        LScore--
        bag3.x = width/2
        bag3.y = height/2
    }
    if(ball.isTouching(bag4)){
        PScore++
        LScore--
        bag4.x = width/2
        bag4.y = height/2
    }
    if(ball.isTouching(bag5)){
        PScore++
        LScore--
        bag5.x = width/2
        bag5.y = height/2
    }
    if(ball.isTouching(bag6)){
        PScore++
        LScore--
        bag6.x = width/2
        bag6.y = height/2
    }
    if(ball.isTouching(bag7)){
        PScore++
        LScore--
        bag7.x = width/2
        bag7.y = height/2
    }
    if(ball.isTouching(bag8)){
        PScore++
        LScore--
        bag8.x = width/2
        bag8.y = height/2
    }
    textSize(35)
    textAlign(CENTER)
    textFont("Castellar")
    fill("yellow")
    text("Bags collected: " + PScore,width/2,100)
    text("Bags left: " + LScore,width/2,50)

    if(PScore === 8 && LScore === 0){
        ASound.play();
        gameState = medal3
    }
}