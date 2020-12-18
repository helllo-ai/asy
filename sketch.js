var ball;
var database
var position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    database=firebase.database()
    database.ref("BALL/position").on("value",readposition)


    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref("BALL/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
   
}
function readposition(data){
position=data.val()
ball.x=position.x
ball.y=position.y

}
