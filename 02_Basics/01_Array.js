// Array

// JavaScript arrays are resizable and can contain a mix of different data types.
// (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, 
//array elements cannot be accessed using arbitrary strings as indexes but must be accessed 
//using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0,the second
// is at index 1, and so on — and the last element is at the value of the array's length
// property minus 1.

// JavaScript array-copy operations create shallow copies. 

//JavaScript array-copy operations create shallow copies.

//A shallow copy of an object is a copy whose properties share the same references 
//(point to the same underlying values) as those of the source object from which 
//the copy was made. As a result, when you change either the source or the copy,
// you may also cause the other object to change too. That behavior contrasts with 
//the behavior of a deep copy, in which the source and copy are completely independent.

/*A deep copy of an object is a copy whose properties do not share the same references
 (point to the same underlying values) as those of the source object from which the copy 
 was made. As a result, when you change either the source or the copy, you can be assured
you're not causing the other object to change too. That behavior contrasts with the
behavior of a shallow copy, in which changes to nested properties in the source or the 
copy may cause the other object to change too.
*/
const numArr = [1,2,3,4,5]
console.log(numArr[1]) // here within scripts prints element at that index

// we can declare arrays in this type also
const heros = ["superman", "IronMan", "Hulk","Natasha"]
console.log(heros[3],"My Crush")

// methods of array
numArr.push(55)
console.log(numArr)

numArr.pop()
console.log(numArr)

numArr.unshift(10)  // insert an element at 0th index
console.log(numArr)

numArr.shift()  // remove element from 0th index 
console.log(numArr)

console.log(numArr.includes(10))  // return T/F if an element is present or not

console.log(numArr.indexOf(10))// return index of element if present otherwise return -1

const newNum = numArr.join();
console.log(newNum)
console.log(typeof(newNum))  // it ocnverts into string 

// slice & splice
console.log("A ->",numArr)
const num1 = numArr.slice(1,3)  // using slice it will make a copy and do not effect orignal array
                                // prints elements at given range and last range is Not Included
                                
console.log("Using slice-> ",num1)
console.log("A after slice ->",numArr)
console.log("B ->",numArr)
const num2 = numArr.splice(1,3) // it affects orignal copy while alteration with array
                                //print given range and last range is included
console.log("using Splice-> ",num2)
console.log("B After Splice ->",numArr)

// **************************Array 2nd Class ***********************************

const marvalHero = ["Thor","IronMan","Hulk","Thanos"]
const dcHero = ["Shaktiman","Naagraaj","SuperMan","SpiderMan"]
// marvalHero.push(dcHero)0
const newHeros =marvalHero.concat(dcHero)  // add up both elements of Array
console.log(newHeros)

console.log("Using Spread Operator ⬇️")
const allHero = [...marvalHero, ...dcHero]
console.log(allHero)

console.log("Using flat operator ⬇️")
const flatEx =[4,9,7,5,[5,3,8,71,[8,0,3,4,[,6,5]]],9,3,7]
const flatArray = flatEx.flat(Infinity)    // flat directly print all elements of all array within it
console.log(flatArray)

// 'Array.isArray' checks given data is array or not
console.log(Array.isArray("Vishal-Kumar Verma"))
// 'Array.from' convert the given string into Array
console.log(Array.from("Vishal-Kumar-Verma"))
// 'Array.of() ' converts given varibles data innto array
const score1= 100
const score2= 200
const score3= 300
const score4= 400

console.log(Array.of(score1,score2,score3))




