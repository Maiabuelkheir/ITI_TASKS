import {Circle} from './CircleModule.js';
import { Rectangle } from './SquaresModule.js';
import { Square } from './SquaresModule.js';


const myCircle=new Circle();
myCircle.color="red";
myCircle.radius=5;
myCircle.x=10;
myCircle.y=10;

const myRectangle = new Rectangle();
myRectangle.color="blue";
myRectangle.height=4;
myRectangle.width=6;


const mySquare = new Square("green",4);


console.log(myCircle.getArea());
console.log(myRectangle.RgetArea());
console.log(mySquare.RgetArea());
