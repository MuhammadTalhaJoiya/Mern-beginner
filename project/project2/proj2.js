let title=document.getElementById("title")
let description=document.getElementById("description")
let btn=document.getElementsByClassName("subbtn")[0]
let container=document.getElementsByClassName("container")[0]
let obj1={

}
obj1.title="kjsad"
console.log(obj1)

let goals=[]
// localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]
const showtask=()=>{
    goals.forEach((value,index)=>{
        let div1=document.createElement("div")
        div1.setAttribute("class","para")
        let div2=document.createElement("div")
        div2.setAttribute("class","para2")
        let p1=document.createElement("div")
        p1.setAttribute("class","title")
        if(title.value){
            p1.innerText=title.value
        }
        else{
            return null
        }
        
        let p2=document.createElement("div")
        p2.innerText=value.description
        p2.setAttribute("class","description")
        if(description.value){
            p2.innerText=description.value
        }
        else{
            return null
        }
        let btn2=document.createElement("button")
        btn2.setAttribute("class","delebtn")
        btn2.addEventListener("click",()=>{
            removetask()
            goals.splice(index,1)
            // localStorage.setItem("task",JSON.stringify(goals))
            showtask()
        })
        div1.append(div2)
        div2.append(p1)
        div2.append(p2)
        div1.append(btn2)
        container.append(div1)
        
    })
}



const removetask=()=>{
    goals.forEach((value,index)=>{
        let div12=document.querySelector(".para")
        div12.remove()
    })
    
}
btn.addEventListener("click",()=>{
    removetask()
    goals.push({"title":title.value,"description":description.value})
    // console.log(localStorage.setItem("task",JSON.stringify(goals)))
    
    showtask()
    // console.log(goals)
})
showtask()
// localStorage.clear()
// let a=[2,4]
// a.forEach((val,index)=>{
//     console.log(a)
//     a.splice(index,1)
//     console.log(a)
// })





