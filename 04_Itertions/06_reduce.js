// use of accumulator ans current value in reduce
 const myValue = [1,2,3]

// const total = myValue.reduce( function(acc,currVal){  //two parameter must be passed 
//     console.log(`accumulator  ${acc} and Current Value  ${currVal}`)
//     return acc+currVal
// },0) // here 0 will be initial value for accumulator while staring loop

// as same as ->
const total = myValue.reduce( (acc,val) => acc+val, 0)


console.log(total)

// example 

const courses = [

   { itemName: "Data Science Courses",
    prize: 1299
   },
   { itemName: "python Courses",
    prize: 599
   },
   { itemName: "Android Dev Courses",
   prize: 10099
   },
   { itemName: "Software Courses",
    prize: 12299
   },
]
const totalVal = courses.reduce( (acc,val) => (acc+val.prize),0)
console.log(totalVal)
