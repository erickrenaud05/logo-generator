const { Shape, Square, Triangle, Circle } = require('./shapes.js');

describe('Shapes', () => {
    describe('rect', () => {
        it('Should output rect object', () => {
            const firstSquare = new Square('rect', 'black');
            expect(firstSquare.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="black" />
            </svg>`);
        })
    })
    describe('Circle', () => {
        it('Should output circle object', () => {
            const firstCircle = new Circle('circle', 'black');
            expect(firstCircle.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <circle width="100%" height="100%" fill="black" cx="10" cy="10" r="200" />
            </svg>`);
        })
    })
    describe('Polygon', () => {
        it('Should output polygon object', () => {
            const firstTriangle = new Triangle('polygon', 'black');
            expect(firstTriangle.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
                <polygon width="100%" height="100%" fill="black" points="100 10, 300 210, 0 210" />
            </svg>`);
        })
    })
})