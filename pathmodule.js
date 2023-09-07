const p = require("path");

const pathObj = p.parse(__filename);
console.log(pathObj);


// Print the directory name
console.log(pathObj.dir);


// Print the file name
console.log(pathObj.base);


// Print the extension
console.log(pathObj.ext);


// Print the file name without extension
console.log(pathObj.name);


// Print the root directory
console.log(pathObj.root);


// check if the path is absolute or not
console.log(p.isAbsolute(__filename));


// join the paths
console.log(p.join(__dirname, "test", "hello.html"));


// resolve the paths
console.log(p.resolve(__dirname, "test", "hello.html"));
