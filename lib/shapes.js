class Shape {
    constructor(shape, color, height='100%', width='100%') {
        this.shape = shape;
        this.stroke = color;
        this.fill = color;
        this.height = height;
        this.width = width;
    }

    render(){
        if(this.shape === 'rect'){
            const svgData = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <${this.shape} width="${this.width}" height="${this.height}" fill="${this.fill}" />
            </svg>`
            return svgData;
        } else if(this.shape === 'circle'){
            const svgData = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <${this.shape} width="${this.width}" height="${this.height}" fill="${this.fill}" cx="${this.cx}" cy="${this.cy}" r="200" />
            </svg>`
            return svgData;
        } else if(this.shape === 'polygon'){
            const svgData = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <${this.shape} width="${this.width}" height="${this.height}" fill="${this.fill}" points="${this.pointA}, ${this.pointB}, ${this.pointC}" />
            </svg>`
            return svgData;
        } 

        

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
    constructor(shape, color, height, width, pointA="100 10", pointB="300 210", pointC="0 210"){
        super(shape, color, height, width);
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
}

module.exports = {Shape, Square, Circle, Triangle};