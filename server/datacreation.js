const coursesdata= require('./Data')
const Courses  = require('./model/courseSchema');

const defaultData = async()=>{
    try{
        await Courses.deleteMany({})
        const storeData = await Courses.insertMany(coursesdata);
    }catch(err){
        console.log(`Error is found inserting Data ${err}`);
    }
}

module.exports = defaultData