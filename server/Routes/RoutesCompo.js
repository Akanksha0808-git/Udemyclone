const allcourses=require("../controller/courseController")
const { Register, login, searchcourses, dashboard } = require("../controller/userController");
const userAuth = require("../midddleware/authmiddleware");
const routes = require("express").Router();

// getall productsdata
routes.get("/data", allcourses)

// register
routes.post("/register", Register)

// login
routes.post("/login", login)

// search products 
routes.post("/search", searchcourses)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);

module.exports =routes;


