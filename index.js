const { Shape, Square, Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');

const square = new Square('rect', 'black', '40%', '40%');

const svgData = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        <${square.shape} width="${square.width}" height="${square.height}" fill="${square.fill}" />
</svg>`

fs.writeFile('./examples/test.svg', svgData, (err) => {
        err ? console.error(err) : console.log('SVG CREATED!')
    })