// Use of rest operator(...) in function
function addCartPrize(...num1){  // use of rest operator to pass all arguments in function
    return num1
}
console.log(addCartPrize(210,55,307,800,305))

// another case
function addCartPrize1(val1,val2,val3,...num1){ // 💥💥here first 3 arguments are 
    // passed in val1,val2,val3 and rest of on nums1 so only nums1 print here 
    return num1
}
console.log(addCartPrize1(210,55,307,800,305))
//****************************************************************************** */
// how to use objects in function ⬇️


const user ={
    name:" Risu",
    weight: 500,
    number:958413460
}

function handleObjects(anyUser){
    console.log(`User Name is ${anyUser.name}, weight is ${anyUser.weight} and number is ${anyUser.number}`)
}
   console.log(user)

// we can also pass object in function as
// difference is only that with object it prints output in object format 
//and another will print in string format
handleObjects({
    name:"motu",
    weight:90,
    number:9411214101
})

const arrayUse = [100,200,300,400,500]
function printArray(anyArray){
    return anyArray     // we can print single element using [] -> anyArray[1] ->200
}
console.log(printArray(arrayUse))