//  using this keyword
const user = {
    name: "Risu",
    sex: "Male",
    occupation: "Engineering",
    age:"20",
    welcome : function(anyName){
        console.log(`${this.name} , Welcome to Tinder.`)  //to access parent members use 'this' keyword
                                                        //
     console.log(this)
    } 
}
// user.welcome()

// user.name= "vishal"
// //console.log(user.welcome())   // current contex is changed so risu is replaced by vishal
              
//  user.welcome()
// console.log(user)
 console.log(this)    //when this will run then current context will be empty (because there is no global context)because it refers a empty object
 // 💥Browser ke ander jo engine run krta h wo h window object (ab standalone ho gya hai alag alag enviroment mei isse ab runn krte h)
 // aur global k ander empty object hota hai -> {}


//  const chai = function (){
//     console.log("hiiiiiiii")
//     let user = "vishal"
//         console.log(this.user)   // using this. -> we can access too many things
//                           //  Qki 'this 'object pe kaam krta h toh hm ise function k 
//                             //andar only 'this'use nhi kr payenge
//  }
 const chai = () =>{   // use of arrow => 'function' is removed and we use '()=>'
    console.log("hiiiiiiii")
    let user = "vishal"
        console.log(this.user) 

 }
 chai()


 // Explicit Function -> return mei curly braces ke andar return ka use krna compulsory h
 const explicitFun = (a,b) =>{
    return a+b ;
 }
 console.log(explicitFun(5,9))

  // Implicit function -> parenthesis ka use krenge return k jagah


 //const explicitFun1 = (a,b) => (a*b)  // or a*b 

 // here if we have to return object then 
 const explicitFun1 = (a,b) => ({user:"vishal"})  // or a*b 


    
 
 console.log(explicitFun1(5,9))
  
