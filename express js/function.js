const registerfunc=(req,res)=>{
    const userName=req.body.name
    const userEmail=req.body.email
    const userPass=req.body.password
    res.json({
        success:true,
    })
}
module.exports=registerfunc