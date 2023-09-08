let arr1=[2,5,7,9,3]

// find method
// let pred=(val,index)=>{
//     console.log(val,index)
// }

// arr1.find(pred)

// arr1.find((val,index)=>{
//     console.log(val,index)
// })

// arr1.find((val,index)=>{
//     console.log(val+2)
// })

// let result=arr1.find((val,index)=>{
//     // let a=val>2
//     // return a
//     if(val>2){
//         return val
//     }
// })
// console.log(result) //does not give you array and return only one true value
// console.log(arr1)

// filter method
// arr1.filter((value,index)=>{
//     if(value>5){
//         console.log(value)
//     }
// })
// arr1.filter((value,index)=>{
//     console.log(value+2)
// })
// const result1=arr1.filter((value,index)=>{
//     if(value>2){
//         return value
//     }
// })
// console.log(result1) //return array and return all true value
// console.log(arr1)

// let result=arr1.every((value,index)=>{
//     // if(value>7){
//     //     return value
//     // }
//     if(value<=9){
//         return value
//     }
// })
// console.log(result)

// let result=arr1.some((value,index)=>{
//     // if(value>7){
//     //     return value
//     // }
//     if(value>9){
//         return value
//     }
// })
// console.log(result)



// for(let ele of arr1){
//     console.log(ele)
// }
// console.log(arr1)
// let a=arr1.forEach((val,index) => {
//     // console.log(val+20)
//     return val+20 //not possible
// });
// console.log(a) //does not give array
// console.log(arr1)

// let result=arr1.map((val,index)=>{
//     // console.log(val+2)
//     return val+2
// })
// console.log(result) //give array
// console.log(arr1)
// let result=arr1.reduce((prevval,curval,index)=>{
//     return prevval+curval
// })
// console.log(result)
// console.log(arr1)

let arr=[{a:"asj",b:"jd",c:"hdiw"},{a:"NSAD",b:"jhdiu",c:"uydu"},{a:"sajdni",b:"uiehi",c:"auhdi"}]
let r=arr.map((val)=>{
    return val.a
    

})
console.log(arr)
console.log(r)


// let a=["","ajd","yeri",""]
// console.log(a.length)
// const r=a.filter((val)=>{
//     return val.length!==0
// })
// console.log(r)
// console.log(r.length)

