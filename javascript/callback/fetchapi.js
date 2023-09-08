const url="https://www.boredapi.com/api/activity"
const h1=document.querySelector("h1")
console.log("Gg")
const fetchData=()=>{
    fetch(url).then((resolve)=>{
        console.log(resolve)
        return resolve.json()
    }).then((data)=>{
        console.log(data)
        h1.innerText=data.activity
    }).catch((err)=>{
        console.log(err)
    })
}
fetchData()
console.log("TT")