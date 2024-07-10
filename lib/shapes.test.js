const { Shape, Square } = require('./shapes.js');

describe('Shapes', () => {
    describe('rect', () => {
        it('Should output rect object', () => {
            const square = {
                shape: 'rect',
                stroke: 'black',
                strokeWidth: 1,
                fill: 'black',
                x: 10,
                y: 10,
                width: 200,
                height: 300
            }
            const firstSquare = new Square('rect', 'black');
            expect(firstSquare).toEqual(square);
        })
    })
})