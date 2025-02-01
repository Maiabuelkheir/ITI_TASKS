import Shape from './shapeModule'

class Rectangule extends Shape{
constructor(value,width,height){
    this.width = width;
    this.height = height;
    super();
}


 getArea(){
    this.ShapeDraw();
    return this.width * this.height;
  }
}


class Square extends Rectangule{
    constructor(width,height){
        super(width,height);
    }


    getArea(){
        this.ShapeDraw();
        return this.width * this.height;
      }
}
export {Rectangule ,Square}
