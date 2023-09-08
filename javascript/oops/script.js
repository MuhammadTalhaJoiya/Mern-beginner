// class Electronic{
//     constructor(name,input,output){
//         this.name=name
//         this.input=input
//         this.output=output
//     }
//     print(name){
//         console.log(`name is ${this.name}`)
//     }
// }

// const obj=new Electronic("DELL",30,87)
// // console.log(obj.input)

// obj.print()

// class Electronic{
    
//     #input;
//     #output;
//     #name;
//     constructor(input,output,name){
//         this.#name=name;
//         this.#input=input;
//         this.#output=output;
//     }
//     print(){
//         console.log(`name is ${this.#name}`);
//     }
// }

// const obj=new Electronic(30,87,'Dell')
// // console.log(obj.input)

// obj.print()

// class Electronic{
    
//     #input;
//     #output;
//     #name;
//     constructor(input,output,name){
//         this.#name=name;
//         this.#input=input;
//         this.#output=output;
//     }
//     print(){
//         console.log(`name is ${this.#name}`);
//     }
// }
// class Keyboard extends Electronic{
//     constructor(input,output,name,type){
//         super(input,output,name)
//         this.type=type

//     }
// }

// const keyboard=new Keyboard(23,56,"DellKeyboard","Electronic")
// console.log(keyboard.type)
// keyboard.print()

class Electronic{
    
    // #input;
    // #output;
    // #name;
    constructor(input,output,name){
        this.name=name;
        this.input=input;
        this.output=output;
    }
    print(){
        console.log(`name is ${this.name}`);
    }
}
class Keyboard extends Electronic{
    constructor(input,output,name,type){
        super(input,output,name)
        this.type=type

    }
}

const keyboard=new Keyboard(23,56,"DellKeyboard","Electronic")
console.log(keyboard.type)
console.log(keyboard.input)
console.log(keyboard.output)
console.log(keyboard.name)
keyboard.print()