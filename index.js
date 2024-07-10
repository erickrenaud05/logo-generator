const { Shape, Square, Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const color = require('color');
// const square = new Square('rect', 'black', '40%', '40%');

// const svgData = `<svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">
//         <${square.shape} width="${square.width}" height="${square.height}" fill="${square.fill}" />
// </svg>`

// fs.writeFile('./examples/test.svg', svgData, (err) => {
//         err ? console.error(err) : console.log('SVG CREATED!')
//     })


const validateColor = function(colorName){
    if(!isNaN(colorName)){
        colorName = '#' + colorName;
    }

    try{
        const thisColor = color(colorName);
    } catch(err){
        console.log('\nColor invalid, please check spelling.');
        return false;
    }
    return true;
}

const questions = [
    {
        type: 'input', 
        message: 'Please enter up to three characters for logo text:', 
        name: 'text',
        validate: (val) => {
            if(val.length > 3){
                console.log('\nLogo text can only contain up to three characters')
                return false;
            }

            return true;
        }
    },
    {
        type: 'input', 
        message: 'Please enter text color:', 
        name: 'textColor',
        validate: (val) => validateColor(val)
    },
    {
        type: 'list', 
        message: 'Please enter logo shape:', 
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input', 
        message: 'Please enter logo shape color:', 
        name: 'shapeColor',
        validate: (val) => validateColor(val)
    }
]

inquirer
    .prompt(questions)


