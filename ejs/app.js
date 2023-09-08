const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const jwt=require("jsonwebtoken")
const hostname="localhost"
const port=4000
const path=require("path")
console.log(path.join(path.resolve(),"public"))
// const ejs=require("ejs")
app.set("view engine","ejs")
// app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(path.resolve(),"public")))
app.use(cookieParser())
const {connection,User}=require("./mongoose.js")
connection()

const nextFunction=async (req,res,next)=>{
    const {token}=req.cookies
    if(token){
        const decode=jwt.verify(token,"kjsaniuewuoi")
        //  console.log(decode)
         req.user = await User.findById(decode._id);
        //  console.log(req.user)
        next()
    }
    else{
        res.render("login")
        // console.log(req.a)

    }
}

app.get("/",nextFunction,(req,res)=>{
    // console.log(req.user)
    res.render("logout",{name:req.user.name})
})



app.get("/register",(req,res)=>{
    res.render("register")
})
app.post("/register",async(req,res)=>{
    const body1=await User.create(req.body)
    // req.user={name:req.user.body}
    // const token1=jwt.sign({_id:body1._id},"kjsaniuewuoi")
    //     res.cookie("token",token1,{
    //         httpOnly:true,
    //         expires:new Date(Date.now()+60*1000),
    //     })
    res.redirect("/")
})
app.post("/login",async(req,res)=>{
    const identity1=await User.findOne({email:req.body.email})
    const identity2=await User.findOne({password:req.body.password})
    if(!identity1){
        return res.redirect("/register")
    }
    else if(!identity2){
        res.render("login",{messege:"incorrect messege"})
    }
    else if(identity1 && identity2){
        // const a=await User.create(req.body)
        // console.log(req.body)
        console.log(identity1)
        console.log(identity2)
        const token1=jwt.sign({_id:identity1._id},"kjsaniuewuoi")
        res.cookie("token",token1,{
            httpOnly:true,
            expires:new Date(Date.now()+60*1000),
        })
        res.redirect("/")
    }
    
    
})
app.get("/logout",async(req,res)=>{
    
    res.cookie("token",null,{
        httpOnly:null,
        expires:new Date(Date.now()),
    })
    res.redirect("/")
})

// app.post("/register",(req,res)=>{
//     res.render("logout")
// })

app.listen(port,hostname,(req,res)=>{
    console.log(`HI server http://${hostname}:${port}`)
})
