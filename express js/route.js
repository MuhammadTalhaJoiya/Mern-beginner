const express=require("express")
const registerfunc=require("./function.js")
const router=express.Router()


router.route("/api/v2/register").post(registerfunc).get((req,res)=>{
    res.send("wow")
})


module.exports=router