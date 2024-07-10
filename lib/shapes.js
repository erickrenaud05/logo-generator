class Shape {
    constructor(shape, color, height='100%', width='100%') {
        this.shape = shape;
        this.stroke = color;
        this.fill = color;
        this.height = height;
        this.width = width;
    }
}

class Square extends Shape {
    constructor(shape, color, height, width, x=10, y=10) {
        super(shape, color, height, width);
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape {
    constructor(shape, color, height, width, cx=10, cy=10){
        super(shape, color, height, width);
        this.cx = cx;
        this.cy = cy;
    }
}

class Triangle extends Shape {
    constructor(shape, color, height, width, pointA, pointB, pointC){
        super(shape, color, height, width);
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
}

module.exports = {Shape, Square, Circle, Triangle};