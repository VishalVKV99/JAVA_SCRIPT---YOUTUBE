const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers.map( (val) => {  // map k liye v return ka zarurat padega
    return val+10
})
console.log(newNum)

// chaining method

const myNumber1 = [1,2,3,4,5,6,7,8,9,10]
const newNum1 = myNumbers
            .map( (val) => (val*10))
            .map((val) => (val +27))
            .map((val) => (val - 3))
            .filter( (num) => (num >35))
    
     console.log(newNum1)
 



    


