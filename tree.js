class Tree extends BaseClass{
    constructor(x,y,width,height){
      super(x,y,width,height);
      this.image = loadImage("images/tree.png");
      Matter.Body.setAngle(this.body);
    }
  }