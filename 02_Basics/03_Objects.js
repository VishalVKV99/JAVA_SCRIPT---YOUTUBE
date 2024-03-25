const course = {
    coursename : "JS in Hindi",
    coursePrize:999,
    courseTeacher:"Hitest Sir"
}
const {courseTeacher : teacher} = course  // we can user teacher insted of courseTeacher and 
//we print also in this way when multipe-times we call same objects
console.log(teacher)  // issi renaming propery ko Object-Destructure kehte hai

// these below are format of API used in JSON

// {
//     "name": "Vishal",
//     "class": 5,
//     "number":9565874215
// }

// [
//    { "name": "Vishal",
//         "class": 5,
//         "number":9565874215,
//     },
//     {

//     },
//     {

//     }
    

// ]
