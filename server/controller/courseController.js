const Courses = require("../model/productSchema")
// const data=require("../Data")


const allcourses = async (req, res)=>{
    try{
        const coursesData = await Courses.find()
        // console.log(CoursesData)
        res.status(201).send( coursesData)
    }catch(err){
        console.log("Error to send data on frontend :" + err.message)
    }
}

module.exports = allcourses