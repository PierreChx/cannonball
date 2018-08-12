var ball;
var cannon;
var tank;
var angle=45;
function setup() {
    createCanvas(800,400);
    angleMode(DEGREES)
    cannon = new Cannon();
    ball   = new Ball();
    tank = new Tank();
}

function draw() {
    background(0);
    
    if (ball.droped){
        ball.update();
       // console.log('update')
    }
    tank.check()
    if (tank.hit){
        tank.reset()
        tank.hit=false;
    }
    tank.show();
    cannon.show();
    cannon.rotate();
}

function keyReleased(){
    if(key!= ' '){
    cannon.dir=0
    }
}

function keyPressed(){
    if (key == ' '){
    ball.droped=true
        
    }
    
    if (keyCode == LEFT_ARROW){
        cannon.dir=1
            }
    if (keyCode == RIGHT_ARROW){
        cannon.dir=-1;
            }
    
}