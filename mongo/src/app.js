const mongoose = require("mongoose");

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


  // MongoDB Schema
  // A schema is a blueprint of the database. It defines the structure of the database.
  // A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

const courseSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  isPublished: Boolean,
});

// Model
// const Course = mongoose.model("Collection",Schema);
const Course = mongoose.model("Course", courseSchema);

// Create
// async function createCourse() {
//   try{
//   const course = new Course({
//     name: "Lokesh Singh",
//     roll: 25,
//     isPublished: false,
//   });

//   const result = await course.save();
//   console.log(result);
// }
// catch(err){
//   console.log(err.message);
// }
// }
// // Calling Create
// createCourse();



  // const course1 = new Course({
  //   name: "Sonali",
  //   roll: 58,
  //   isPublished: true,
  // });

  // const result1 = course1.save();
  // console.log(result1);


// Read

async function getCourses() {
  const courses = await Course.find({ roll: 123 });
  console.log(courses);
}

getCourses();