const mongoose=require("mongoose")
exports.connection=()=>{
    mongoose.connect("mongodb://localhost:27017/apitutorial").then(()=>{
        console.log("this is mongoose")
    }).catch((err)=>{
        console.log(err)
    })
}
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

exports.User=new mongoose.model("login/logout",UserSchema)

