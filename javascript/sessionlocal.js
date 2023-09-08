const btnsubmit=document.getElementById("btn1")
const btndelete=document.getElementById("btn2")
const input=document.getElementById("inputtext")


// const getdata=()=>{
//     sessionStorage.setItem("nameuser",input.value)
// }

// btnsubmit.addEventListener("click",getdata)

// const deledata=()=>{
//     // sessionStorage.removeItem("nameuser")
//     // console.log(sessionStorage.key(0))
//     console.log(sessionStorage.key(1))
//     // sessionStorage.clear()
//     // console.log(sessionStorage.length)
// }
// btndelete.addEventListener("click",deledata)
// if(sessionStorage.getItem("nameuser")){
//     alert(sessionStorage.getItem("nameuser"))
// }

const getdata=()=>{
    localStorage.setItem("nameuser",JSON.stringify({"name":"Talha","roll":20}))
}
btnsubmit.addEventListener("click",getdata)
const deledata=()=>{
    localStorage.clear()
}
btndelete.addEventListener("click",deledata)

if(localStorage.getItem("nameuser")){
    alert(JSON.parse(localStorage.getItem("nameuser")))
}