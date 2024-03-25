const score =400
console.log(score)  // normal execution for taking numbers, CypeCasting Can be done

const balance = new Number(5412)// Shows 100% Will be  number No typeCasting can be done
console.log(balance)
console.log(balance.toString().length)   //shows total characters
console.log(balance.toFixed(3))   // used for representing floating points

const precNum = 545.98141
console.log(precNum.toPrecision(6))  // Returns a string containing a number represented either in exponential
// or fixed-point notation with a specified number of digits.

const hundred = 1000000000
console.log(hundred.toLocaleString()) //convert to (US Standard) as seperated by commas
console.log(hundred.toLocaleString('en-IN')) // represents as Indian Standard

//************************MATHS*************************************

console.log(Math.abs(-4654))
console.log(Math.round(85.81))
console.log(Math.ceil(45.217))  // zara sa v point (.) k baad increase hua toh ek increase ho  jayega
console.log(Math.floor(45.97117)) // hamesha constant value dega no inc and decrease
console.log(Math.min(4,5,7,1,3,9,4,0,7,6,1)) // print min value in array
console.log(Math.max(4,5,7,1,3,9,4,0,7,6,1)) // print max value in array

console.log(Math.random()) // always give random number btw (0 & 1)
// to avoid 0 we multiply by 10 and use floor to get lowest Single Digit ⬇️⬇️
console.log("Using Single and Ranged Random Numbers:")
 console.log(Math.floor(Math.random()*10))   // here to Avoid Zero we can add 1;

 console.log("Print a Random Number  ranged  from 10 - 20.")

 const min = 10
 const max = 20
 console.log(Math.floor(Math.random()*10)+10)








