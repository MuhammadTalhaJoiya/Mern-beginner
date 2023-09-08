const mongoose=require("mongoose")
const { boolean } = require("webidl-conversions")

mongoose.connect("mongodb://localhost:27017/unidata").then(()=>{
    console.log("connect to mongoose")
}).catch((err)=>{
    console.log(err)
})

const student=new mongoose.Schema({
    name:String,
    email:String,
    height:Number,
    workout:Boolean
})

const StudentC=new mongoose.model("studentdata",student)

const mongodatacreation=async()=>{
    // let a=await StudentC.create({
    //     name:"Ali",
    //     email:"ALI@gmail.com",
    //     height:6,
    //     workout:true
    // })

    // let a=await StudentC.find({height:{$gt:6}})
    // let a=await StudentC.find({height:{$gte:6}})
    // let a=await StudentC.find({height:{$lte:6}})
    let a=await StudentC.find({height:{$lte:6}})
    console.log(a)
}
mongodatacreation()