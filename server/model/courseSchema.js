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


const Courses = new mongoose.model("Courses" , courseSchema);

module.exports = Courses