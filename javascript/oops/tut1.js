// function johncena(height,weight,winning){
//     return{
//         "height":height,
//         "weight":weight,
//         winning:()=>{
//             console.log("win all matches approx")
//         }
//     }
// }
// console.log(johncena(300,180))

// function johncena(height,weight,winning){
//     const a={
//         "weight":weight,
//         "height":height,
//         cup:(winning)=>{
//             console.log(winning)
//         }
//     }
//     return a
// }
// const aa='This is func'
// const f1=johncena(300,180,aa)
// console.log(f1)


// function Star(name,address){
//     this.name=name
//     this.address=address
//     this.school="Usman"
// }
// const b=new Star("Talha","R-154/Sector-9")
// b.qualification='BSCS'
// console.log(b)
// console.log(b.constructor)
// const c=new Star("Usman","R-158/sector8")
// console.log(c)
// console.log(c.constructor)


// const a={
//     name:'YY',
//     house:"iu"
// }
// console.log(a)
// console.log(a.constructor)

// function Enemy(name,age){
//     this.name=name
//     this.age=age
// }

// const a=new Enemy('John',34)
// // console.log(a)
// const arr=[]
// for (let i = 1; i <=100; i++) {
//     arr.push(a)
//     // console.log(arr)
// }
// console.log(arr)


// function iron1(name,weight){
//     name="Talha",
//     weight=234
    
// }
// console.log(iron1)
// const iron2=iron1
// console.log(iron2)
// iron2.qualification="BSCS"
// console.log(iron1)
// console.log(iron2)

// const iron1=(name,weight)=>{
//     name="Talha",
//     weight=234
//     func1:()=>{
//         console.log("h")
//     }
    
// }
// console.log(iron1)
// const iron2=iron1
// console.log(iron2)
// iron2.qualification="BSCS"
// console.log(iron1)
// console.log(iron2)


// function Iron1(){
//     this.name="Talha",
//     this.weight=234
    
// }
// const iron1=new Iron1()
// console.log(iron1)
// const iron2=iron1
// console.log(iron2)
// iron2.qualification="BSCS"
// console.log(iron1)
// console.log(iron2)

// we can avoid from this by putting spread operator in it

// const arr=[2,5,7]
// console.log(arr)
// console.log(...arr)
// const a=new Array(277,622)
// console.log(a)
// const b=[...arr,...a,678]
// console.log(b)

function Iron1(){
    this.name="Talha",
    this.weight=234
    
}
const iron1=new Iron1()
console.log(iron1)
const iron2={...iron1,"roll":20}
console.log(iron2)

iron2.added="true"

console.log(iron1)
console.log(iron2)
iron2.qualification="BSCS"
console.log(iron2)


