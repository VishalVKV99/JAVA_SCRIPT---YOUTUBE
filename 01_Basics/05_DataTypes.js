// Jis trah data ko memory me rakkha jata hai us trah se 
// se data ka classification hota hai. 
// primimitive and non-primitive
// Primitive (7 categories) -> are referenced by "call by value".
// 7 types -> String, Number ,Boolean, Null, Symbol, undefined, BigInt.
let name = "Vkv"
const num = 100
const price = 684.684
const logIn = true
const tempVal = null
let userId
const id = Symbol('123')
const ClgId = Symbol(123)
console.log(id == ClgId)  // value passed in Symbol are not same either they are string or number

const bigInt = 6687846468753468765446688n   // here 'n' denotes BigInt



// Referece(Non-Primitive)
// types -> Array, Objects,Functions
// Arrays are denoted in [] 
const heros = ["Hulk", "Tony Stark", "Spiderman", "Thor"]

// Objects are denoted within the { }

const myObj = {
    name:"Vishal",
    id:"mca23050",
    num:9525668125,
}


// function is treated as variable in js 
//Here, myfun is variable treates as function and
// function(){ } -> is defination of function. 
const myFun = function(){
    console.log("Hello World");
}


//******JS IS DYNAMIC TYPE LANGUAGE **************** 

// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined 
// by the value they hold at runtime and can change throughout
//  the program as we assign different values to them.
