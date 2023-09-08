// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.childNodes)
// console.log(document.body.children)


// div=document.getElementsByClassName("cla1")
// console.log(div[0])
// console.log(div[1])

// div=document.querySelector(".cla1")
// console.log(div)
// div.innerText='TTt'

// // head=document.querySelector("#head")
// // head.style.background='red'

// // input=document.getElementsByName("email1")
// // console.log(input)
// // a=input[0]

// btn=document.getElementsByClassName("btn")
// console.log(btn)
// a=btn[0]
// a.style.background='red'
// a.style.border='2px solid black'
// a.style.padding='5px'
// a.style.fontSize='25px'
// a.style.cursor='pointer'

// span1=document.getElementsByTagName("span")
// console.log(span1)
// b=span1[0]
// b.style.background='grey'

// span12=span1[0]
// console.log(span12.getAttribute("class"))

// span12.setAttribute("id",'Thisid')

// console.log(span12.getAttribute("id"))


btn0=document.getElementsByTagName("button")[0]
btn1=document.getElementsByTagName("button")[1]

btn0.onclick=createElement
btn1.onclick=deleteElement
function createElement(){
    h1=document.createElement("h1")
    h1.setAttribute("class","calssy")
    h1.innerText="THis is Heading after calling function onclick"
    document.body.prepend(h1)
}   
function deleteElement(){
    h11=document.getElementsByClassName("calssy")[0]
    h11.remove()
    console.log("tt")
}

