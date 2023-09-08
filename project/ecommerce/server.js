const http=require("http")
const port=4000
const hostname="localhost"
const fs=require("fs")

const home=fs.readFileSync("./proj1.html","utf-8")

const server=http.createServer((req,res,next)=>{
    res.end(home)
})

server.listen(port,hostname,()=>{
    console.log(`I am server http://${hostname}:${port}`)
})
