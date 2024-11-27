// import { mongoose } from "../Config/db"; 
const {mongoose}= require("../Config/db")


const diseaseDataSchema = new mongoose.Schema({
    disease: {
      type: String,
      required: true
    },
    colors: {
      type: [[Number]], // Array of arrays containing numbers (RGB values)
      required: true
    },
    solution: {
      type: String,
      required: true
    },
    symptoms: {
      type: String,
      required: true
    },
    isEdible: {
      type: Boolean,
      required: true
    },
    affectedPlants: {
      type: [String], // Array of strings
      required: true
    }
  });

  const DiseaseData = mongoose.model('DiseaseData', diseaseDataSchema);
module.exports = {DiseaseData};