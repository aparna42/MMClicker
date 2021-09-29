var apple
var mmImg
var score = 90000
var i1, i2, i3, i4, i5, i6
var up1 = 0, up2 = 0, up3 = 0, up4 = 0, up5 = 0, up6 = 0
var backgroundImg
var wallleft
var wallright
var walltop
var flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false, flag6 = false
var increase
var woodImg



function preload() {
  mmImg = loadImage("mm.png")
  woodImg = loadImage("wood.png")
  backgroundImg = loadImage("kkk.jpg")
  i1Img = loadImage("tree.png")
  i2Img = loadImage("feild.png")
  i3Img = loadImage("factory.png")
  i4Img = loadImage("wizad.png")
  i5Img = loadImage("yee.png")
  i6Img = loadImage("hope.png")
}

function setup() {
  createCanvas(1200, 750);

  mm = createSprite(200, 400, 50, 50);
  mm.addImage("mm", mmImg)
  mm.scale = 0.3

  cursor(HAND)


  wallleft = createSprite(345, 400, 20, 800)
  wallleft.addImage("wood", woodImg)
  wallleft.scale = 0.3

  wallright = createSprite(850, 400, 20, 800)
  wallright.addImage("wood", woodImg)
  wallright.scale = 0.3

  walltop = createSprite(800, 27, 50, 850)
  walltop.addImage("wood", woodImg)
  walltop.rotation = -90
  walltop.scale = 0.9

  i1 = createSprite(1150, 100, 80, 80)
  i1.addImage("tree", i1Img)
  //i1.scale = 0.9
  i1.visible = false

  i2 = createSprite(1150, 205, 80, 80)
  i2.addImage("64", i2Img)
  // i2.scale = 0.9
  i2.visible = false

  i3 = createSprite(1150, 310, 80, 80)
  i3.addImage("f", i3Img)
  i3.visible = false

  i4 = createSprite(1150, 415, 80, 80)
  i4.addImage("q", i4Img)
  i4.visible = false

  i5 = createSprite(1150, 520, 80, 80)
  i5.addImage("u", i5Img)
  i5.visible = false

  i6 = createSprite(1150, 625, 80, 80)
  i6.addImage("q", i6Img)
  i6.visible = false

  //You can use stroke to add an outline color and strokeWeight to make the outline thicker
  stroke("white")
  fill("white")
}

function draw() {
  background(backgroundImg);


  //Added another condition to display "up1 is finished" only if the mouse is over the area
  if (up1 === 125 && mouseIsOver(i1)) {
    textSize(50)
    text("up1 is finish", width / 2 - 100, height / 2)
  }

  //Write similar code for up2 - up6

  if (flag1 === true) {
    if (frameCount % (70 - up1) === 0) {
      score = score + 1
    }
  }


  if (flag2 === true) {
    if (frameCount % (150 - up2) === 0) {
      score = score + 5
    }
  }


  if (flag3 === true) {
    if (frameCount % 220 === 0) {
      score = score + 10
    }
  }

  if (flag4 === true) {
    if (frameCount % 300 === 0) {
      score = score + 20
    }
  }

  if (flag5 === true) {
    if (frameCount % 450 === 0) {
      score = score + 35
    }
  }

  if (flag6 === true) {
    if (frameCount % 500 === 0) {
      score = score + 50
    }
  }

  //Added an additional condition to prevent the text from showing on the screen
  //when you hover over the sprites
  if (score >= 10 && up1 != 125) {
    i1.visible = true
  }
  else {
    i1.visible = false
  }

  if (score >= 50) {
    i2.visible = true
  }
  else {
    i2.visible = false
  }


  if (score >= 100) {
    i3.visible = true
  }
  else {
    i3.visible = false
  }

  if (score >= 300) {
    i4.visible = true
  }
  else {
    i4.visible = false
  }

  if (score >= 1000) {
    i5.visible = true
  }
  else {
    i5.visible = false
  }

  if (score >= 2000) {
    i6.visible = true
  }
  else {
    i6.visible = false
  }




  //  console.log(up2)
  if (mousePressedOver(i2) && i2.visible === true && score > 50) {
    i2.visible = false
    score -= 50
    flag2 = true
    if (up2 <= 125)
      up2 = up2 + 1
  }

  // console.log(up3)
  if (mousePressedOver(i3) && i3.visible === true && score > 100) {
    i3.visible = false
    score -= 100
    flag3 = true
    if (up3 <= 1500)
      up3 = up3 + 1
  }

  if (mousePressedOver(i4) && i4.visible === true && score > 300) {
    i4.visible = false
    score -= 300
    flag4 = true
    if (up4 <= 3000)
      up4 = up4 + 1
  }

  if (mousePressedOver(i5) && i5.visible === true && score > 1000) {
    i5.visible = false
    score -= 1000
    flag5 = true
    if (up5 <= 6000)
      up5 = up5 + 1
  }

  if (mousePressedOver(i6) && i6.visible === true && score > 2000) {
    i6.visible = false
    score -= 2000
    flag6 = true
    if (up6 <= 12000)
      up6 = up6 + 1
  }


  drawSprites();

  fill("black")
  textSize(30)
  text(score + " M&M", 110, 100)


  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i1) && i1.visible) {
      text("After hard work and research you made a \n M&M tree your first step to success", width / 2 - 500, height / 2)
    }
  }

  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i2) && i2.visible) {
      text("After you made the M&M tree your now making \n fields of them to make the more money", width / 2 - 500, height / 2)
    }
  }
  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i3) && i3.visible) {
      text("Now that you research on making the fields small size but \n the same output you now have millons inside the factories", width / 2 - 500, height / 2)
    }
  }
  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i4) && i4.visible) {
      text("Your found a magic person who lives in a wizard \n tower and if you give him some money he will make \n more M&M", width / 2 - 500, height / 2)
    }
  }
  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i5) && i5.visible) {
      text("With the help of the wizard you created portals that gives \n you 2 times the amount of what you put in it", width / 2 - 500, height / 2)
    }
  }
  if (mouseX <= 1200 && mouseY <= 800) {
    if (mouseIsOver(i6) && i6.visible) {
      text("After you sent a crew to space to find an M&M planet your found \n your man set up machines to mine it", width / 2 - 500, height / 2)
    }
  }

}


//You can try removing the mousePressedOver code and writing it this way in mouseClicked
//if you want only a single click per reward sprite

//Otherwise you can keep it the same as before
function mouseClicked() {
  if (mouseIsOver(mm)) {
    score++
  }
  if (mouseIsOver(i1) && i1.visible === true && score > 10) {
    i1.visible = false
    score -= 10
    flag1 = true
    if (up1 <= 125) {
      up1 = up1 + 1
    }
    console.log(up1)
  }

}
