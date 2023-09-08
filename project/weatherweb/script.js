const degree=document.querySelector(".weather1")
const date=document.querySelector(".weather2 span")
const location1=document.querySelector(".weather2 p")
const emoji=document.querySelector(".weather3 img")
const condition=document.querySelector(".weather3 p")
const formsubmittion=document.querySelector("form")
const searchopt=document.querySelector("form input")
const searchbutton=document.querySelector("form button")

const city="new york"
async function fetchData(city){
    try {
        // const city="london"
        const url=`https://api.weatherapi.com/v1/current.json?key=90a5c25edc044e7aa7793412222606&q=${city}`
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        updateData(data.location.name,data.current.temp_c,data.current.condition.text,data.current.condition.icon,data.location.localtime)
        // console.log(data.current.condition.icon)
        
    } catch (error) {
        alert("Location not found")
    }
    
}
fetchData(city)

function updateData(name,temp,cond,src,localtime){
    location1.innerText=name
    degree.innerText=temp
    condition.innerText=cond
    emoji.src=src
    const date1=localtime.split(" ")[0]
    const time=localtime.split(" ")[1]
    date.innerText=`Date:${date1},Time:${time}`
}

formsubmittion.addEventListener("submit",(e)=>{
    e.preventDefault()
    const city=searchopt.value
    fetchData(city)
})

// fetchData(city)