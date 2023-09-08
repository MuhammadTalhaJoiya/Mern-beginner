const btn=document.querySelector("button")
// console.log(btn)
// const func1=(name,gender,college)=>{
//     if(gender){
//         gender="Male"

//     }
//     else{
//         gender="False"
//     }
//     console.log(`This is ${name}.Gender is ${gender}.college is ${college}`)
// }


// setTimeout(func1,3000,"Talha",true,'Usman')





let a=setTimeout((name,gender,college)=>{
    if(gender){
        gender="Male"

    }
    else{
        clearTimeout
    }
    console.log(`This is ${name}.Gender is ${gender}.college is ${college}`)
},2000,"Talha",false,'Usman')
console.log(a)
// btn.addEventListener("click",()=>{
//     clearTimeout(a)
// })


// let a=setInterval((name,gender,college)=>{
//     if(gender){
//         gender="Male"

//     }
//     else{
//         gender="False"
//     }
//     console.log(`This is ${name}.Gender is ${gender}.college is ${college}`)
// },1000,"Talha",true,'Usman')
// // console.log(a)
// btn.addEventListener("click",()=>{
//     clearInterval(a)
// })


// let a=setInterval(()=>{
//     let a=new Date()
//     console.log(a)
// },1000,"Talha",true,'Usman')
// // console.log(a)
// btn.addEventListener("click",()=>{
//     clearInterval(a)
// })


// let a=setInterval(()=>{
//     let a=Math.floor(Math.random()*100)
//     console.log(a)
// },1000,"Talha",true,'Usman')
// // console.log(a)
// btn.addEventListener("click",()=>{
//     clearInterval(a)
// })