const fs = require("fs");

// create a folder
// fs.mkdir('tutorial', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Folder successfully created');
//     }
// });

// create a file and write some text into it Sync
// fs.writeFileSync('example.txt', 'This is Lokesh Singh');

// create a file and write some text into it Sync
// fs.writeFileSync('test.txt', 'This is Lokesh Singh And I am a Software Developer');

// rename the file
// fs.renameSync('example.txt', 'example2.txt');

// read the file
/*

const get_data = fs.readFileSync('example2.txt', 'utf8');
console.log(get_data);
const get_data1 = fs.readFileSync('test.txt', 'utf8');
console.log(get_data1);

*/

// append the data to the file
// fs.appendFileSync('example2.txt', '\n And this is a new Line');

// Creating file to perform Delete operation
fs.writeFileSync("demo.txt", "I am created by Lokesh Singh");

// delete the file
fs.unlinkSync("demo.txt");
