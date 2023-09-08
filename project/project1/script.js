const span1=document.querySelector(".h1")
const span2=document.querySelector(".h2")
const span3=document.querySelector(".h3")
const span4=document.querySelector(".h4")
const content=document.getElementsByClassName("content")[0]
const h1=document.getElementsByTagName("h1")
// console.log(h1)
console.log(content)
// console.log(span1)

const second=1000
const minute=60*second
const hour=60*minute
const day=24*hour

// console.log(`${second}:${minute}:${hour}:${day}`)
    let now1=new Date()
    const dayc=String(now1.getDate()).padStart(2,"0")
    const monthc=String(now1.getMonth()+1).padStart(2,"0")
    const setday=prompt("enter day").padStart(2,"0")
    const setmonth=prompt("enter month").padStart(2,"0")
    const setyear=now1.getFullYear()
    now1=`${monthc}/${dayc}/${setyear}`
    console.log(now1)
    let target=`${setmonth}/${setday}/${setyear}`
    console.log(target)
    if(now1>target){
        target=`${setmonth}/${setday}/${setyear+1}`
        console.log(target)
    }


function timerFunction(){
    
    const a=setInterval(()=>{
        const dategiven=new Date(target).getTime()
        const now=new Date().getTime()
        const remaining=dategiven-now
        // console.log(dategiven)
        // console.log(now)
        // console.log(remaining)
        // console.log(day)
        const dayleft=Math.floor((remaining/day))
        const hourleft=Math.floor((remaining%day)/hour) // console.log(remaining/hour)
        const minuteleft=Math.floor((remaining%hour)/minute)
        const secondleft=Math.floor((remaining%minute)/second)

        span1.innerText=dayleft
        span2.innerText=hourleft
        span3.innerText=minuteleft
        span4.innerText=secondleft
        if(remaining<0){
            h1.innerText="Time's UP"
            clearInterval(a)
            content.style.display="none"
        }
    },0)
    
}



timerFunction()