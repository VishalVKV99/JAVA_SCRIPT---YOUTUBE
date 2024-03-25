// Dates  are object Class

let myDates = new Date()
console.log(myDates)
console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toISOString())
console.log(myDates.toLocaleDateString())
console.log("mostly used ⬇️")
console.log(myDates.toLocaleString())

console.log(myDates.toLocaleTimeString())
console.log(myDates.toJSON())
console.log(myDates.getTimezoneOffset())
console.log(typeof myDates)  // Declaring type of Date

console.log("To Declare Specific Date ")

let myCreatedDate = new Date(2024,2,31,9,15)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

console.log("To Declare Specific Date in DD-MM-YY")
let dateFormat = new Date("02-23-2000")
console.log(dateFormat.toLocaleString())

console.log("Using TimeStamp ")
// mostly Used for quizzes,to know exact timestamp value ,polls,to makes fastest winners
let myTimeStamp = Date.now()   // instead of" new Date"
console.log(myTimeStamp)
console.log(dateFormat.getTime()) // used for flat,room booking apps/sites

// To convert into second til given date ⬇️

console.log(Math.floor(Date.now()/1000)) // converted into second

// to find Specific Date , Month, year,time etc in given date.⬇️
let findDate = new Date();
console.log(findDate.getDay())  // shows only 1 day
console.log(findDate.getDate())  // shows only date
console.log(findDate.getMonth()) // starting from '0'

findDate.toLocaleString('default',{
    weekday:"short"
})
console.log(findDate)






















