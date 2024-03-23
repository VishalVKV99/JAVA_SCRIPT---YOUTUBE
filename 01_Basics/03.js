/*
let number = 46
console.log(typeof number)
let number2 = "48"
console.log(typeof number2)
let number3 = Number(number) // type conversion of integer to number

console.log(typeof number3)

let macId = 23050
 // let idValue = Number(mcaId)  // her etype conversion is not allowed 
                                // if a number has also string attached to it
console.log(typeof macId)

// 34sf -> is  type of NaN(not a number)
// true -> 1
// false-> 0
let logIn = 1
let logOff = 0
let check = Boolean(logIn)
let check2 = Boolean(logOff)

console.log(check)
console.log(check2)
 let idName = " "
 console.log(idName) // it will give false if no string assigned to it
 // " " -> return false if no value assigned to it
 //  "vishal" -> true
//  we can also conver string to number 

*/
// ********************  Operations  ****************************
let value = 45
let negVal = -value   // converting value in negative value
console.log(negVal)
console.log(2*2)
console.log(2+2)


let str1 = "Vishal"
let str2 = " Verma"
let str3 = str1 +str2  // used to add string
console.log(str3)

console.log("1" + 2)  // first is string so all treated as string
console.log("1" + 3 + 3)  
console.log(5 + 4 + " 4")// bcoz it follows ToPrimitive Guidelines 
                            // first is treated as number so all 
                            ///treated as number
console.log(true)
console.log(+true)      // incrementing 1 in true -> 1 
console.log(+" ")      // incrementing 1 in string


// let num,num2,num3
// let num4 = num3 = num2 = num = 234  Such type of activities are not acceptable in compnies
// make your code readibility high and use better way to code ur program
let gameCounter = 1000
console.log(++gameCounter)  // prefix
console.log(gameCounter++)   // postfix read in js and mdn
let x = 3;
const y = x++;


/*
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

Postfix Increment (x++): In the first example,
 x++ is used, which is a postfix increment. 
 In this case, the value of x is first assigned to y 
 and then x is incremented. So y gets the value of x 
 before the increment, which is 3, and x becomes 4.


Prefix Increment (++a): In the second example, 
++a is used, which is a prefix increment.
 Here, a is incremented first and then its value is assigned to b.
  So both a and b get the value of a after the increment, which is 4.

*/













