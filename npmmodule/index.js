// Study Here -> https://www.npmjs.com/package/chalk

import chalk from 'chalk';


// For color 
console.log(chalk.red('Hello world!'));
console.log(chalk.green('This is correct!'));


// For background color
console.log(chalk.bgRed('My name is Lokesh Singh!'));
console.log(chalk.bgGreen('I am a software developer!'));


// For bold text
console.log(chalk.bold('This is bold text!'));


// For bold text with background color and text color
console.log(chalk.bold.bgYellow.red('This is bold text!'));


// For underlined text
console.log(chalk.underline('This is underlined text!'));


// For italic text
console.log(chalk.italic('This is italic text!'));


// For strikethrough text
console.log(chalk.strikethrough('This is strikethrough text!'));


// For combining multiple styles
console.log(chalk.bold.bgYellow.red.underline('This is bold text!'));


// Easily define your own themes: ** Important **

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));