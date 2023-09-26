const mongoose = require("mongoose");
// const Course = require("/Course");

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...");
    console.error(err);
  });

//   Insert May Record

const courseSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);

// async function createCourse() {
//     const C_language = new Course({
//         name: "C,C++",
//         roll: 25,
//         isPublished: false,
//     });
//     const Python = new Course({
//         name: "Python",
//         roll: 26,
//         isPublished: true,
//     });
//     const Django = new Course({
//         name: "Django",
//         roll: 289,
//         isPublished: false,
//     });
//     const MERN = new Course({
//         name: "MERN",
//         roll: 2535,
//         isPublished: true,
//     });

// =============================== Insert One Record ===============================
// async function createCourse() {
//     try{
// const course1 = new Course({
//   name: "Lokesh Singh",
//   roll: 2347,
//   isPublished: false,
// });
// const result = await course1.save();
// console.log(result);
// }
// catch(err){
//     console.log(err.message);
// }
// }

// createCourse();


// =============================== Insert Many Record ===============================
//     const result = await Course.insertMany([C_language,Python,Django,MERN]);
//     console.log(result);
//     }

// createCourse();

// Read all the record
async function readCourse() {
  // const result = await Course.find();  Print All the data
  const result1 = await Course.find({ name: "Lokesh Singh"}); //Print All the data having name Lokesh Singh
  const result2 = await Course.find({ name: "Lokesh Singh"}).limit(1); //Print first the data having name Lokesh Singh
  const result3 = await Course.find({ name: "Lokesh Singh"},{name:1}); //Print all the data having name Lokesh Singh and print only name
  const result4 = await Course.find({ name: "Lokesh Singh"},{name:1,_id:0}).limit(1); //Print first the data having name Lokesh Singh and print only name 
  console.log(result4);
}

readCourse();
