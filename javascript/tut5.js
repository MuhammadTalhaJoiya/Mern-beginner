
// function arr(a){
//     let sum=0
//     for (let index = 0; index < a.length; index++) {
//         const element = a[index];
//         sum+=element
//         console.log(element)
//     }
//     console.log(sum)
// }
// let arr1=[2,3,5,7]
// arr(arr1)
const arr=function(a){
    let sum=0
    let arr2=[]
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        arr2.push(element)
        sum+=element
    }
    return arr2
    // return sum
}
let arr1=[2,3,5,7]
let ans=arr(arr1)
console.log(ans)


// let a=40
// {
//     let a=20
//     console.log(a)
// }
// console.log(a)
// var a=40
// {
//     var a=20
// }
// console.log(a)
// var a=21
// {
//     console.log(a)
// }
// let a=21
// {
//     console.log(a)
// }

{
    let a=21
}
console.log(a) //not possible