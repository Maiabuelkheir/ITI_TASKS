import Shape from './shapeModule.js';
class Circle extends Shape {
    constructor(color,radius,x,y) {
        super(color);
    
        this.color = Red;
        this.x = x;
        this.y = y;
    }

    getArea() {
        this.DrawShape();
        return "Circle Area = " + Math.PI * Math.pow(this.radius, 2);
    }    

}
export {Circle};


