const express=require("express")
const app=express()
const port=4000
const path=require("path")
const bodyParser=require("body-parser")
// const registerfunc = require("./function")
const router = require("./route")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(router)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})
// app.post("/api/v1/registration",(req,res)=>{
//     console.log(req.body)
//     console.log(req.body.name)
// })

// app.get("/",(req,res)=>{
//     res.json({
//         name:"Talha",
//         rollnumber:20
//     })
// })
// app.post('/api/v2/register',registerfunc)


app.listen(port,()=>{
    console.log(`HI I am server http://localhost:${port}`)
})