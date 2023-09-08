btn=document.getElementsByClassName("btn")[0]
container=document.getElementsByClassName("container")[0]
input=document.getElementsByTagName("input")[0]
content=document.getElementsByClassName("content")[0]
btn.onclick=createele
// btn.onclick=generateWords

function generateWords(n){
    let text=""
    let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < n; i++) {
        let random=(Math.random()*25).toFixed(0)
        
        let letter = alphabets[random];
        text+=letter
    }
    return text
}


function createele(){
    let Numberofwords=Number(input.value)
    
    let data=""
    for (let i = 0; i < Numberofwords; i++) {
        data+=generateWords((Math.random()*25).toFixed(0)).toLowerCase()
        data+=" "
    }
    console.log(data)
    p=document.createElement("h1")
    p.setAttribute("class","para")
    // console.log(input.value)
    p.innerText=data
    content.append(p)
    if(!Numberofwords){
        p.remove()
    }
}

