// const hostname="localhost"
const mongoose=require("mongoose")
exports.connection=()=>{
    mongoose.connect(`mongodb://localhost:27017/passport`).then(()=>{
    console.log("Salam Mongoose")
}).catch((err)=>{
    console.log(err)
})

}
const userdata=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:String
})

exports.User=mongoose.model("Userinfo",userdata)



// module.exports=connection


