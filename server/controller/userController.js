// let arr = []; // database
const User=require("../model/userSchema")
const Courses=require("../model/courseSchema")
const saltround = 10
const jwt=require("jsonwebtoken")
const secretkey="#@$%^&*"
const bcrypt = require("bcrypt")


const  Signup = async(req, res) => {

try{
    const {name , email , password} = req.body;
    const founduser = await User.findOne({email});
    
    if (founduser) {
      return res.send({ msg: "User already exist" });
    }

    //Hashing Password
    const hashpassword = await bcrypt.hash(password, saltround);
    
    //creating user 
    const temp = await User.create( {
      name:name,
      email: email,
      password: hashpassword,
    });
    console.log(temp)
    res.send({msg:"User Registered successfullyy",user:temp})
}
catch(err){
    console.log(`Error is creating user :- ${err.message}`);
    res.status(500).send({msg : err.message})
}
   
};

const login = async(req, res) => {
    // const userdata = req.body;
    // console.log(userdata);
    try{
        let {email, password} = req.body

        const login = await User.findOne({email: email});

        if(!login) {
            return res.status(200).send({msg : "User not registered "});
        }
        if((await bcrypt.compare(password, login.password)) == false){
            return res.status(200).send({msg : "User password is wrong"});
        }
        // genrate token
        const token = jwt.sign({_id :login._id}, secretkey , {expiresIn : "24h"});
        const loginemail = login.email;
        const loginpass = login.password;

        res.status(200).send({user : [loginemail, loginpass], token : token, userid : login._id})
    }
    catch(err){
        res.status(500).send({msg : err.message});
    }
    
  };
  const dashboard = (req, res)=>{
    return res.send({
        result : "Hiiii!!!!!You are Verified"
    })
}

const searchcourses = async (req, res) => {
  
    try {
        const search = req.body.search;
        console.log(search)
        const searching = await Courses.find({
          $or: [
            { heading: { $regex: new RegExp(search, "i") } },
            { des: { $regex: new RegExp(search, "i") } },
            { category: { $regex: new RegExp(search, "i") } },
            // Add more fields as needed
          ],
        })
    
        if (searching.length > 0) {
          return res.status(200).json({
            success: true,
            msg: "Courses Details",
            data: searching,
          });
        } else {
          return res.status(404).json({ msg: "No matching Courses found" });
        }
      } catch (err) {
        console.log(err.message);
        return res.status(500).json({
          msg: "Internal Server Error",
          error: err.message,
        });
      }
    
  };
  


module.exports = { Signup, login,dashboard,searchcourses };






