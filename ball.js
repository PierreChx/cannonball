function Ball(){
    this.x=0;
    this.y=0;
    this.gravity=0.11;
    this.vx=0;
    this.vy=0;
    this.inSpeed=9;
    this.droped=false;
    
    this.show = function(x, y){
        fill(255);
        noStroke();
        ellipse(x,y,16,16);
        this.x=x;
        this.y=y;
        
    }
    
    this.update = function(){
        this.vy+=this.gravity;
        this.y+=this.vy;
        this.x+=this.vx;
        this.show(this.x,this.y); 
        if(this.y>height){
            this.droped=false;
        }
    }
}
function Cannon(){
    
    this.x1=10;
    this.y1=height-10;
    this.length=30;
    this.dir = 0;
    this.angle = 45;
    
    this.show= function(){
        stroke(255);
        strokeWeight(14);
        fill(255);
        
        this.x2 = this.x1+this.length*cos(this.angle);
        this.y2 = this.y1-this.length*sin(this.angle);
        line(this.x1, this.y1, this.x2, this.y2);  
        
        if(!ball.droped){
            ball.show(this.x2, this.y2);
            ball.vx=ball.inSpeed*cos(this.angle);
            ball.vy=-ball.inSpeed*sin(this.angle);
        }
       // console.log(this.x2,this.y2)
        //console.log(this.x+this.length*cos(angle))
        //console.log('hello')
    }
    
    this.rotate = function(){
        this.angle+=this.dir;   
    }
}

function Tank(){
    this.x=random(50,width-50);
    this.y=height-10;
    this.leng=40
    this.hit=false
    console.log(this.x)
    
    
    
    this.check = function(){
        if(ball.x>this.x&&ball.x<this.x+this.leng&&ball.y>height-15){
            tank.hit=true;
        }
        
        
    }
    this.show=function (){
        stroke(255)
        rect(this.x,this.y,this.leng,-10)
        
    }
    this.reset = function(){
        this.x=random(50,width-50);
    }
    
    
}