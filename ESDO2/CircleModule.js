
import Shape from './shapeModule'

class Circle extends Shape{
    constructor(radius){
        super();

    }


    getArea(){
        this.ShapeDraw();
        return console.log(3.14*this.radius);
    }


}


