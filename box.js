class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            density:2,
            friction:1.5

        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width=w;
        this.height=h;
        this.image=loadImage(sprites/dustbin.jpg);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height);
        fill(255,0,0);
        rect(0,0,this.width,this.height);
        pop();
    }
}