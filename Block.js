class Block {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':0.7,
          'density':1.0,
      }

      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

      console.log(this.body.speed)
      
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        pop();
      }

      
    }
  
}