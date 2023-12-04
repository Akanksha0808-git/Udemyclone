const express = require('express');
const datacreation=require('./datacreation')
const connection = require("./config/db");
const cors = require("cors");
const routes = require("./Routes/RoutesCompo");
const app = express();
const PORT = process.env.PORT || 7000;
// Cors policy
app.use(cors({
    origin: "*"
}));

// Body parser
app.use(express.json());

// Routes
app.use("/", routes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
const startConnection = async ()=>{
    try{
        await connection()
        app.listen(PORT, () => {
            console.log(`Server is Runing on http://localhost:${PORT}`)
        })
       datacreation()
        
    }
    catch(err){
        console.log(`Database is showing Error ${err.message}`)
    }
  }
  
  startConnection();