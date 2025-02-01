class Shape {
    #color;
    
    set Color(newColor) {
        this.#color = newColor;
    }

    get Color(){
        return this.#color;
    }

    DrawShape() {
        console.log(`The shape color is: ${this.#color}`);
    }
}

export default Shape;


