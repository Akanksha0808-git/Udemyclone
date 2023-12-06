const allcourses=require("../controller/courseController")
const { Signup, login, dashboard,searchcourses } = require("../controller/userController");
const userAuth = require("../midddleware/authmiddleware");
const routes = require("express").Router();

// getall coursesdata
routes.get("/data", allcourses)

// register
routes.post("/signup", Signup)

// login
routes.post("/login", login)

// search courses 
routes.post("/search", searchcourses)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);

module.exports =routes;


