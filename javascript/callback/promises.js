// let a=new Promise((resolve,reject)=>{
//     let b=false
//     if(b){
//         resolve("SUCCESS")
//     }
//     else{
//         reject("UNSUCCES")
//     }
// })
// a.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

const arr=[]
const fetchData=(arr=[])=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({
                name:"JOiya",
                ROLL:23
            })
            if(arr.length>0){
                resolve("SUCCESS")
            }
            else{
                reject("UNSUCCESSFULL")
            }
        },3000)
        console.log(arr)
    })
    
}

fetchData(arr).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
}).finally(()=>{
    console.log("I am coming at any cost")
})