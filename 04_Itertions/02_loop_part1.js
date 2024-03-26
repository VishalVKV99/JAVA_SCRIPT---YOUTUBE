// lopps part 2
/*
const arr1 = [1,2,3,4,5,6,7,8,9]

// forof

for (const num of arr1) {  //  objects states that -> kiss cheej k upar loop lagana hai
    console.log(num)
}

const greetings = "I Love you Babes"

for (const greet of greetings) {
    console.log(` --> ${greet}`)
}

// maps

//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.

//Map objects are collections of key-value pairs. 
//A key in the Map may only occur once; it is unique in the Map's collection.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")
// console.log(map)
 
// for (const [key,value] of map) {  // here we can seperete in terma of key and Value
//                                 // here we cannot iterate object like this !
//     console.log(key ,':-', value)
// }

let myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}
// to use map in Object for iteration we generally use 'forin' loop

for (const key in myObj) {
  console.log(`shortCut for ${myObj[key]} is ${key}`)
}

const programming  = ["cpp", "C", "Java", "Python","Java-Script"]

for (const key in programming) {
   console.log(`${key}. ${programming[key]}`)
}
*/
//use of forin in map 
// we van;t use this in map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")

for (const key in map) {
   console.log(key)
}
