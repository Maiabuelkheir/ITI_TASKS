
class Shape {
#color;
constructor(value){
}
set Color(color){
this.#color=value;
}
get Color(){
    return this.#color
}

ShapeDraw(){
        return console.log(`Color = ${this.#color}`);
    }
}





