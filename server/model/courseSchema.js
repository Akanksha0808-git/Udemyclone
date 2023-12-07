const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: Number,
  category: String,
  subcategory: String,
  heading: String,
  des:String,
  image:String,
  author : String,
  rating: String,
  price: String,

});
const learningSchema = mongoose.Schema({
  id: Number,
  heading: String,
  des:String,
  image:String,
  author : String,
  rating: String,
  price: String,
})


const Courses = new mongoose.model("Courses" , courseSchema);
const mylearningCollection = mongoose.model("Mylearning",learningSchema)
module.exports = {Courses,mylearningCollection}