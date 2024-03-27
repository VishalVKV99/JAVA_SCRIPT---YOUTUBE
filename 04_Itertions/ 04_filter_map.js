const programming  = ["cpp", "C", "Java", "Python","Java-Script"]

const values = programming.forEach((item) =>{
    console.log(item)
    return      // here forEach doesnot return any value

})
console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((val) => (val >2 && val <7 ))  // here with the use of filter we can return any value
 
const newNums1 = myNums.filter((val) => {
    return val >5 // here we have to return value using return keyword becoz of scope defined otherwise it will not return an value
})  

console.log(newNums)
console.log(newNums1)

// if we have to use only forEach then ->
 const newEmpl = []
const exampleArr = [1,2,3,4,5,6,7,8,9,10]

exampleArr.forEach( (item) => {
    if(item >= 2 && item < 6){
        newEmpl.push(item)
    }
})
console.log(newEmpl)


const books = [
    {title:'Book One',genre: 'Fiction',publish:1981,edition:2024},
    {title:'Book Two',genre: 'history',publish:1941,edition:2022},
    {title:'Book Three',genre: 'English',publish:2021,edition:2023},
    {title:'Book Four',genre: 'Maths',publish:2011,edition:2024},
    {title:'Book Five',genre: 'Science',publish:2021,edition:2022},
    {title:'Book Six',genre: 'Economics',publish:2011,edition:2024},
    {title:'Book Seven',genre: 'Computer',publish:2019,edition:2024},
    {title:'Book Eight',genre: 'DSA',publish:1971,edition:2014},
    {title:'Book Nine',genre: 'Core-Java',publish:1800,edition:2024},
    {title:'Book Ten',genre: 'Operating System',publish:1970,edition:2024},
    {title:'Book Eleven',genre: 'Mats',publish:1900,edition:2022}
]

const filterBooks = books.filter( (val) => val.publish > 2000 )
console.log(filterBooks)