import Shape from './shapeModule.js';
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.height = height;
        this.width = width;
    }

    getArea(){
        this.DrawShape();
        return "Area =" + this.width * this.height;
    }
  
}

class Square extends Rectangle {
    constructor(color, sideLength) {
        super(color, sideLength, sideLength);
    }
        RgetArea(){
        this.DrawShape();
        return "Area =" + this.width * this.height;
    }
    
}
export { Rectangle, Square };

