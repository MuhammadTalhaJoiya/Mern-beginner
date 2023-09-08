const http=require("http")
const port=4000
const hostname="localhost"

const server=http.createServer((req,res,next)=>{
    if(req.url==="/"){
        res.end("Home")
    }
    else if(req.url==="/contact"){
        res.end("contact")
    }
    else if(req.url==="/about"){
        res.end("about")
    }
    else{
        res.end("404 error Not Found")
    }
})
server.listen(port,hostname,()=>{
    console.log(`Hi I am server http://${hostname}:${port}`)
})