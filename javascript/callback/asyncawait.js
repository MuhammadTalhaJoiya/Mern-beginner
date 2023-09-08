const url="https://www.boredapi.com/api/activity"

let h1=document.querySelector("h1")
// console.log("A")
const fetchData=async()=>{
    try{
        // console.log("C")
        let response=await fetch(url)
        // console.log("D")
        let data=await response.json()
        // console.log("E")
        console.log(data)
        // console.log("F")
        h1.innerText=data.activity
        // throw new Error("I am error")

    }catch (err){
        console.log(err)
    }finally{
        console.log("I am Finally")
    }
    
}
fetchData()
// console.log("B")