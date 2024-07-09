class Shape {
    constructor(shape, color){
        this.shape = shape;
        this.stroke = color;
        this.strokeWidth = 1;
        this.fill = color;
    }
}

class Square extends Shape {
    constructor(shape, color) {
        super(shape, color);
        this.x = 10;
        this.y = 10;
        this.width = 200;
        this.height = 300;
    }
}


const firstSquare = new Square('rect', 'black');

console.log(firstSquare);

module.exports = {Shape, Square};