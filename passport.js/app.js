const express=require("express")
const app=express()
const port=4000
const hostname="localhost"
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const {connection,User}=require("./mongoose.js")
connection()
app.get("/",(req,res)=>{
    res.send("HHHHH")
})

app.post("/register",async(req,res)=>{
    let userDtaa=await User.findOne({username:req.body.username})
    if(userDtaa){
        res.status(400).send("username already exist")
    }
    const creater=await User.create(req.body)
    res.status(201).send(creater)
})


app.listen(port,()=>{
    console.log(`Salam http://${hostname}:${port}`)
})