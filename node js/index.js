// console.log("I am bacend")
// console.log(window)

//file module
// const obj1={
//     name:"Talha",
//     average:(a,b)=>{
//         console.log(a+b/2)
//     }
// }
// module.exports=obj1

//built in module
const fs=require("fs")

// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log("i am here")
// })
// console.log("I am first")

// const a=fs.readFileSync("./sample.txt","utf-8")
// console.log(a)

// fs.writeFile("./writingfile.txt","This is me",()=>{
//     console.log("written")
// })

// const a=fs.writeFileSync("./writtensync","this is synchronous")
// console.log("I am after")

// const path=require("path")

// const a=path.extname("./node,index43.js")
// console.log(a)

// const a=path.basename("D:/fullstack web dev cource/New folder")
// console.log(a)

// const a=path.dirname("D:/fullstack web dev cource/New folder>")
// console.log(a)

// const a=path.join("D:/fullstack web dev cource/New folder/"+"TalhajOiya")
// console.log(a)

const os=require("os")

// console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.totalmem())

// file module,built in module,third party module

