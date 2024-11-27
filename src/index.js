const express= require("express") 
const app= express()
const env=require("dotenv")
const { getDieaseRoute } = require("./Routes/disease")
env.config() 






app.use("/api/user", getDieaseRoute)





const port= process.env.PORT   || 5000



app.listen(port, ()=>{console.log(`server is listening in port ${port}`)})