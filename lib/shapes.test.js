const { Shape, Square, Triangle, Circle } = require('./shapes.js');

describe('Shapes', () => {
    describe('rect', () => {
        it('Should output rect object', () => {
            const firstSquare = new Square('rect', 'black');
            expect(firstSquare.render()).toEqual(`<rect stroke="black" fill="black" height="180" width="180" x="60" y="10" />`);
        })
    })
    describe('Circle', () => {
        it('Should output circle object', () => {
            const firstCircle = new Circle('circle', 'black');
            expect(firstCircle.render()).toEqual(`<circle stroke="black" fill="black" cx="150" cy="100" r="80" />`);
        })
    })
    describe('Polygon', () => {
        it('Should output polygon object', () => {
            const firstTriangle = new Triangle('polygon', 'black');
            expect(firstTriangle.render()).toEqual(`<polygon stroke="black" fill="black" points="150, 18 244, 182 56, 182" />`);
        })
    })
})