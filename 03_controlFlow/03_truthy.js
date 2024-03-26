const userEmail = "usermain@google.com"

if(userEmail){
    console.log("user have Email")
}else{
    console.log("user Dont have Email")

}

// Falsy Value -> false, 0, -0, undefined, NaN, "", BigInt, 0n(zero n), null, ''
// Truthy Value -> "0", 'false', "false", " ", [], {}, function(){}, 

// to know if our 💥function is empty or not ->
const numb = []
if(numb.length == 0){
    console.log("Array is Empty")
}

// to know if our 💥 Object is empty or not ->

const obj1 = {

}

if(Object.keys(obj1).length == 0){
    console.log("Object is Empty")

}

// Nullish Coalescing Operator ( ?? ) :  null undefined
 // these are used in DataBase 
let val,val1,val2;
val = 5 ?? 10;
console.log(val)
val1 = null ?? 10;
console.log(val1)
val2 = undefined ?? 15
console.log(val2)

// Terniary Operator
 const iceTeaPrice  = 100
 iceTeaPrice >80 ? console.log("Greater Than 80"): console.log("Less Than 80") 


