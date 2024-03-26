// if
const userLoggedIn = true
if(true){
    console.log("Welcome User")
    // <,>,<=,>= , ==, etc
} else {
    console.log("Invalid Input")
}
// === is used for type checking and valuse also
const score = 500
if(score >100){
    let power = "fly"
    console.log(`User power is ${power},Used it`)

}
// console.log(`User power is ${power},Used it`)

const balance = 10000
if(balance > 500) console.log("Eligible for Loan");

// Nesting
 if(balance < 500){
        console.log(`Your Credit Score is ${balance},Very Poor`)
 }else if(balance <=1000){
    console.log(`Your Credit Score is ${balance}, Good`)
 }else{
    console.log(`Your Credit Score is ${balance}, Very Good`)

 }


 const userIdLogin = true
 const debitCard = true
 if(userIdLogin && debitCard){
    console.log(`Allow to Buy Course at $5000`)
 }

