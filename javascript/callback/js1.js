// const sum=(a,b,callback)=>{
//     const result= a+b
//     console.log("H")
//     callback(result)
    
// }

// const displaysum=(c)=>{
//     let h1=document.querySelector("h1")
//     h1.innerText=c
// }


// sum(5,3,displaysum)
// sum(5,3,alert)


// const arr=[1,2,3,4,5,6]

// const operation=(arr,call)=>{
//     const arr1=[]
//     for (let i = 0; i < arr.length; i++) {
//         let num=call(arr[i])
//         arr1.push(num)
//     }
//     console.log(arr1)
// }

// function multiply(a){
//     return a*10
// }
// // function divsion(a){
// //     return a/10
// // }

// operation(arr,multiply)
// operation(arr,(a)=>{
//     return a/10
// })


let gamelist=[]
let game={}

const fetchdata=(callback)=>{
    setTimeout(()=>{
        gamelist.push({
            "name":"CSGO",
            "version":2.0
    
        },
        {
            "name":"GTA",
            "version":"VICE CITY"
        }
        )
        callback()
        console.log("after fetch")
    },3000)
    
    console.log("before fetch")
}
console.log("before fetch")

const displayGame=()=>{
    setTimeout(()=>{
        for (let i = 0; i < gamelist.length; i++) {
            // const element = gamelist[i].name;
            const element = gamelist[i];
            // console.log(element.name)
            let p=document.createElement("p")
            p.innerText=element.name
            document.body.append(p)
            
        }
    },1000)
    // for (let i = 0; i < gamelist.length; i++) {
    //     // const element = gamelist[i].name;
    //     const element = gamelist[i];
    //     // console.log(element.name)
    //     let p=document.createElement("p")
    //     p.innerText=element.name
    //     document.body.append(p)
    // }
    
}
fetchdata(displayGame)

// displayGame()