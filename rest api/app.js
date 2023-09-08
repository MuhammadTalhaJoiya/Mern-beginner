const express=require("express")
const app=express()
const port=4000
const hostname="localhost"
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
const mongoose=require("mongoose")
// const { json } = require("stream/consumers")
mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
    console.log("working")
}).catch((err)=>{
    console.log(err)
})


const product=new mongoose.Schema({
    type:String,
    quantity:Number,
    description:String,
    price:Number
})
const producttype=new mongoose.model("producttype",product)
//Create
app.post("/api/v1/productnew",async(req,res)=>{
    const a=await producttype.create(req.body)
    res.status(200).json({
        success:true,
        a
    })
})
//Read
app.get("/api/v1/products",async(req,res)=>{
    let b=await producttype.find()
    res.status(200).json({
        succus:true,
        b
    })
    // console.log(b)
    // console.log(JSON.stringify(b))

})
//Update
app.put("/api/v1/products/:id",async(req,res)=>{
    let productnumber=await producttype.findById(req.params.id)
    productnumber=await producttype.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:true,
        runValidators:true
    })
    res.status(200).json({
        succus:true,
        messege:"COmpleted"
    })
})

app.delete("/api/v1/products/:id",async(req,res)=>{
    const prod=await producttype.findById(req.params.id)
    console.log("before")
    await prod.deleteOne()
    console.log("after")
    res.status(200).json({
        suces:true,
        messege:"deleted"
    })
})
app.listen(port,()=>{
    console.log(`server is here http://${hostname}:${port}`)
})
