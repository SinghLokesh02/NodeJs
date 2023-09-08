import chalk from 'chalk';

console.log(chalk.green.bgBlue('Hello Welcome to validator dependency!'));

// Study Here -> https://www.npmjs.com/package/validator
import validator from 'validator';

const email = 'lokeshsingh7695@gmail.com';
const url = 'https://www.google.com';

let check1 = (validator.isEmail(email));
if(check1){
    console.log(chalk.green('This is correct email!'));
}else{
    console.log(chalk.red('This is incorrect email!'));
}

let check2 = (validator.isURL(url));
if(check2){
    console.log(chalk.bgGreen('This is correct url!'));
}else{
    console.log(chalk.bgRed('This is incorrect url!'));
}