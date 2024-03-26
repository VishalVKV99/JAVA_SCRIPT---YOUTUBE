///for each
const programming  = ["cpp", "C", "Java", "Python","Java-Script"]

programming.forEach(key => {
    console.log(key)
});

// or we can write as
// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

programming.forEach((item) => {
    console.log(item)
})
//used to print each element with index and each index hace all elements present

programming.forEach((item,index,arr) =>{
    console.log(item,index,arr)
})


// below is used to print value from key elements of object from array(forEach loop)

const myCoding = [
    {
        programmingLang: "Java",
        programmingFile: "java"
    },
    {
        programmingLang : "C++",
        programmingFile: "cpp"
    }, 
    {
        programmingLang : "Python",
        programmingFile: "py"
    },


]
myCoding.forEach((item)=>{
    console.log(item)
})