const btn=document.getElementById("btn")
const input=document.getElementsByTagName("input")[0]
const appp=document.getElementsByClassName("paras")[0]
const writename=()=>{
    if(input.value==""){
        return null
    }
    div=document.createElement("div")
    div.setAttribute("class","para")
    div.innerText=`This is ${input.value}`
    appp.append(div)
    
}