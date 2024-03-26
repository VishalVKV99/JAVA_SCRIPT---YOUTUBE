// Scoopes ->{ }
let a = 300

if(true){
    let a = 10
    const b = 20 
    var c = 30   // very bad practice or 'c = 30'
    console.log("Inner: ",a)
}
console.log(a)  // here a & b will not print
// code enviroment mei global ka scope alag hai browser k enviriment k respect m

function parent(){
    const name = "Ballu"
    function child(){
        const age = 20
        console.log(name)
    }
    // console.log(age)    ---->can't access child block but child block can access Parent Block
    child()
}
parent()

if(true){
    const book = "Rd-Sharma"
    if(book == "Rd-Sharma"){
        const prize = " 500$"
        console.log(book + prize)

    }
  //  console.log(prize) not accessed
}
 // console.log(book) not accessed

 console.log(one(5))
 function one(num){
    return num+1
 }

 // we can also write function in this way but declaration will always below to block of function 
 console.log(two(5))
 const result = function(num){
    return num+2
 }





