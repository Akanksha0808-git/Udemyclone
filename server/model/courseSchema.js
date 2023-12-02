const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: Number,
  category: String,
  subCategory: String,
  heading: String,
  image:String,
 author : String,
  price: String,
  rating: String,
});


const Courses = new mongoose.model("Courses" , courseSchema);

module.exports = Courses