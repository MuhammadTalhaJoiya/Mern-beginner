// console.log('This is console')


head=document.getElementById("heading")
box=document.getElementById("box1")
btn=document.getElementById("btn")
input=document.querySelector("input")

let clickcounter=0
btn.addEventListener("click",()=>{
    clickcounter+=1
    if(clickcounter%2!=0){
        box.style.background="red"
        box.style.padding="20px"
        head.classList.add("headclass")
    }else{
        box.style.background=""
        box.style.padding=""
        head.classList.remove("headclass")
    }
})
let counter=0
btn.addEventListener("contextmenu",(e)=>{
    counter+=1
    if(counter%2!=0){
        e.preventDefault()
        btn.style.background='crimson'
    }else{
        btn.style.background=''
        e.preventDefault()
    }
    // e.preventDefault()
    // btn.style.background='crimson'
})
box.addEventListener("mouseover",()=>{
    btn.style.transform="scale(1.1)"
    head.style.background="purple"
})
box.addEventListener("mouseout",()=>{
    btn.style.transform=""
    head.style.background=""
})

input.addEventListener("change",(e)=>{
    // console.log("changing")
    console.log(e.target.value)
})
