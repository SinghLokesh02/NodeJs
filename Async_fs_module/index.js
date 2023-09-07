const fs = require("fs");

// Create a folder
// fs.mkdir("tutorial", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder successfully created");
//   }
// });


// Create a file and write some text into it
// const dataToWrite = "Hey I am a new file";
// fs.writeFile("test1.txt",dataToWrite,(err)=>{
// console.log("The file is created")
// })


// Append Data into file
// fs.appendFile("test1.txt","\n This is a new Appended Dtata",(err)=>{
//     console.log("task Completed");
// })


// Read a Async File
//  fs.readFile("test1.txt",'utf-8',(err,data)=>{
//     console.log(data);
// })


// Create a file to check delete Operation
// fs.writeFile("test_dlt.txt","This is file to check Delete Operation",(err)=>{
//     console.log("The file is created Successfully");
// })


// Delete a file
fs.unlink("test_dlt.txt", (err) => {
  console.log("The file is deleted Successfully");
});
