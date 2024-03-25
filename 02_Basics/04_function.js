// Function
function myName(){   //function ->keyword, myName -> function name, ()->function syntax, {} -> function scope
    console.log("Vishal")
    console.log("Kumar")
    console.log("Verma")

}
 // myName()  //myName -> reference,myName()-> function execution

 function addNum(num1,num2){  // here 💥(num1,num2) are parameters used in function declaration 
    console.log(num1+num2)
 }
 let result = addNum(8,6)  // (3,"4") -> 34(converted into string) and many more...
 // here 💥(8,6) are the arguments used in function calling
 console.log(result)  // will not return any value from function becoz we didnt return any
 // value from function

 function mul(num1,num2){
    return num1*num2
    console.log("Hiii")  // it will not print due to return calling,after return no statement will be executed
 }
 let result2 = mul(7,6)
 console.log(result2)

 // How to use Parameter ⬇️

 function userLogin(nameId = "sam"){  // nameId = " sam"  ->used for Default values if user enters
    // name then it will overwrites it
    if(nameId !== undefined){
        return `${nameId} Just loggged In.`  // way to print messege in return
    }
    console.log("Please Enter User Name")

 }
 // console.log(userLogin("Vishal"))
 console.log(userLogin(""))  // prints -> undefined Just loggged In.< Q.InterviewQsn>




