let sec=0,min=0,hour=0,idnum
const start=document.querySelector(".btn1")
// console.log(start)
const stop=document.querySelector(".btn2")
const clock1=document.querySelector(".clock")
// console.log(clock1)
start.addEventListener("click",()=>{
    idnum=setInterval(() => {
        // sec++
        if(sec<59){
            sec++
        }
        else if(min<59){
            min++
            sec=0
        }
        else{
            min=0
            sec=0
            hour++
        }
        const sec1=sec.toString().padStart(2,"0")
        const min1=min.toString().padStart(2,"0")
        const hour1=hour.toString().padStart(2,"0")
        clock1.innerText=`${hour1}:${min1}:${sec1}`
        // console.log()
    }, 1000);
})
stop.addEventListener("click",()=>{
    clearInterval(idnum)
})