const btn=document.getElementById("btn")
const color=document.getElementById("color")
const body=document.body
const generatecolor=()=>{
    switch (color.value) {
        case "Ramadhan":
            body.style.background="Green"
            break;
        case "Shaban":
            body.style.background="Yellow"
            break;
        case "Safar":
            body.style.background="Blue"
            break;
        case "Muharram":
            body.style.background="Blue"
            break;
        case "Rajab":
            body.style.background="Black"
            break;
    
        default:
            break;
    }
}