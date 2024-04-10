const express=require('express')
const jwt=require('jsonwebtoken')
const {registerCompany,loginCompany,editCompanyDetail}=require('../Controller/CompanyController')

let router=express.Router()

let MW=(req,res,next)=>{
    let token=req.headers.authorization.split(" ")[1]
    if(token!=null){
        try{
            let correctToken=jwt.verify(token,'heveen')
            if(correctToken.Role=="Company"){
                next()
            }
        }
        catch(err){
            res.send({err:err})
        }
    }        
    else{
        res.send({message:"Token Not Available."})
    }
}

router.post("/registerCompany",registerCompany)
router.post("/loginCompany",loginCompany)
router.put("/editCompanyDetail",MW,editCompanyDetail)

module.exports=router