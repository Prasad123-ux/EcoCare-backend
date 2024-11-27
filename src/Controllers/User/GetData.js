
const {diseaseDataSchema}= require("../../Modules/disease")



const getDiseaseController=(req, res)=>{
    diseaseDataSchema.find().exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({success:true, message:"Data fetched Successfully", Data:user})
        }else{
            res.status(404).json({success:false, message:"Data not fetched"})
        }

    }).catch((err)=>{
        res.status(404).json({success:false, message:"Data not found", err:err})

    })

}

module.exports={getDiseaseController}