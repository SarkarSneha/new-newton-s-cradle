class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
   
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
       }
       display(){
           var point1 = this.rope.bodyA.position;
           var point2 = this.rope.bodyB.position;
           
           strokeWeight(2);

           var line1X = point1.x;
           var line1Y = point1.y;

           var line2X = point2.x+ this.offsetX;
           var line2Y = point2.y + this.offsetY;

           line(line1X,line1Y,line2X,line2Y);
           
       }
   
   }