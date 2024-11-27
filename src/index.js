const express= require("express") 
const app= express()
const env=require("dotenv")
const { getDieaseRoute } = require("./Routes/disease")
env.config() 






app.use("/api/user", getDieaseRoute)
const cors = require("cors");

// const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000", 
  "https://vercel.com/prasad-metkars-projects/ecocare-frontend/4PPmB7a2YDdgaeRa3SHdqNtLbhfK"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Reject the request
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));






const port= process.env.PORT   || 5000



app.listen(port, ()=>{console.log(`server is listening in port ${port}`)})