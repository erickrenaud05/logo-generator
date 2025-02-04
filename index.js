const { Shape, Square, Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const color = require('color');

var svgData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`


const validateColor = function(colorName){
    try{
        const thisColor = color(colorName);
    } catch(err){
        console.log('\nColor invalid, please check spelling. If using hexadecimal, please use # infront of value.');
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
    .then((answer) => {
        if(answer.shape === 'Circle') {
            var myShape = new Circle('circle', answer.shapeColor);
            var fontSize = 60;
        } else if(answer.shape === 'Triangle') {
            var myShape = new Triangle('polygon', answer.shapeColor);
            var fontSize = 50;
        } else if(answer.shape === 'Square') {
            var myShape = new Square('rect', answer.shapeColor);
            var fontSize = 60;
        }

        svgData += `    ${myShape.render()}`;
        
        svgData +=  `\n    <text fill="${answer.textColor}" x="150" y="125" font-size="${fontSize}" text-anchor="middle">${answer.text}</text>\n</svg>`;

        fs.writeFile('./logo.svg', svgData, (err) => {
                    err ? console.error(err) : console.log('Generated logo.svg')
                });
    })

