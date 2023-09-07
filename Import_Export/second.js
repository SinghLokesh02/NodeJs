// if you want to import Just one function from a file

// const get = require('./first.js');
// get(23,45)


// if you want to import all the functions from a file
const get = require('./first.js');
console.log(get);

get.Sum(23,45);
get.Substract(23,45);

