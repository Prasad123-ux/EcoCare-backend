const express = require("express") 
const { getDiseaseController } = require("../Controllers/User/GetData")
const getDieaseRoute=express.Router() 

getDieaseRoute.get("/getDiseaseData", getDiseaseController)


module.exports={getDieaseRoute}