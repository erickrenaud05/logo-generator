class Shape {
    constructor(shape, color) {
        this.shape = shape;
        this.stroke = color;
        this.fill = color;        
    }

    render(){
        var svgData = `<`
        for (let prop in this){
            if(prop === 'shape'){
                svgData += `${this[prop]}`;
            } else{
                svgData += ` ${prop}="${this[prop]}"`; 
            }
            
        }
        svgData += ` />`;
        return svgData;
    }
}

class Square extends Shape {
    constructor(shape, color, x="60", y="10") {
        super(shape, color);
        this.height = "180";
        this.width = "180";
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape {
    constructor(shape, color, cx="150", cy="100", r=80){
        super(shape, color);
        this.cx = cx;
        this.cy = cy;
        this.r = r
    }
}

class Triangle extends Shape {
    constructor(shape, width, height, color, points="150, 18 244, 182 56, 182"){
        super(shape, width, height, color);
        this.points = points;
    }
}

module.exports = {Shape, Square, Circle, Triangle};