const {Courses,mylearningCollection} = require("../model/courseSchema")
// const data=require("../Data")


const allcourses = async (req, res)=>{
    try{
        const coursesData = await Courses.find()
        console.log(coursesData)
        res.status(201).send( coursesData)
    }catch(err){
        console.log("Error to send data on frontend :" + err.message)
    }
}
const pushlearningdata = async(req,res)=>{
    const data = req.body;
    const learningdata = await mylearningCollection.create(data)
    res.send(learningdata)
}

const getlearning = async(req,res)=>{
    const data = await mylearningCollection.find({})
    res.send(data)
}


module.exports = {allcourses,pushlearningdata,getlearning}