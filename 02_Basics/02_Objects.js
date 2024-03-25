// Objects can be Declare inn teo way -> (Literals and Constructor)
// object made from Constructor known as Singleton
// Object.create -> iss ke through literals banta hai jo baad mei padhna hai


const mySym = Symbol("Key1")


const jsUser = {  // yahan pe jitne v variables declared hai wo sare indirectly string format hai
    name: "Vishal",
    "fullName": "Vishal kumar Verma",  // isme hm (. operator ka use kar k print nahi karwaa sakte)
    number: 9525668125,
    [mySym]: "♥ ♥ ♥ ♥ ♥",  // Interview Qsn How to use Symbol in object ->[name_of_symbol]
    location:"Noida",
    email: "vermagoogle01@gmail.com",
    isLoggedIn: false,
    loginDays: ["Monday","Wednesday","Saturday","Sunday"]

} 
console.log(jsUser.email)   // old format or bad practice
console.log(jsUser["fullName"])  // accept all format (. aur [] )
console.log(jsUser[mySym])

jsUser.email = "vkv@google.com" // used to vhange value of objects
console.log(jsUser.email)

//To freeze members in Object we have to Change with Object as follows ⬇️⬇️
// Object.freeze(jsUser)  // used to freeze members of Objects
jsUser.email = "abcder@gg=oogle.com"
console.log(jsUser)  // aur yahan pr symol v defined show krega 

jsUser.gretting = function(){
    console.log("Hello JS User 1")
}
jsUser.grettingTwo = function(){
    console.log(`Hello JS User 2, ${this.email}`);  // this -> is used to acces members from function
}
console.log(jsUser.gretting())
console.log(jsUser.grettingTwo())

//**************************Objects 2nd Lecture ******************************/
// there are two ways to Declate Objects in JS
/* 01 */ const tinderUser = new Object()     //this is Singleton object
/* 02 */ const tinderUser2 = new Object()    /// this is non-Singleton Object

console.log(tinderUser)
console.log(tinderUser2)
 // Assgning Values⬇️⬇️
 tinderUser.id ="123ab"
 tinderUser.name = "Shubham-Karamveer"
 tinderUser.logInStatus = false
 tinderUser.suscription = true
 console.log(tinderUser)

 const regularUser = {   
    fullName:{
        
        userName:{
            firstName:"Raj",
            lastName:"Verma"
        }
        
    }
    
    
 }
 console.log(regularUser.fullName.userName)
 // Here how to Combine Objects: 
 const obj1 = {1: "a",2: "b",3: "c"}   //here 1,2,3 are Keys and a,,b,c are key values
 const obj2 = {4: "a",5: "b",6: "c"}
 //const obj3 = {obj1,obj2}    // likewise Array but its bad practice, here obj1 ,obj2 are 
 //treated as values of obj3
 // const obj3 = Object.assign({},obj1,obj2) // best way to combine all objects and {} -> good way
      // we can use {} or not here,{} is target and all remaining are source
// {} isme sara source contain kregr run krne k baad memory issi me milega
const obj3 = {...obj1, ...obj2}  // Using Spread() Operator
console.log(obj3) 

const regularUser1 = {
        name:{
            firstName:"Anmol",
            lastName:"Kumar"
        },
        number:{

        },
        address:{

        }
}
console.log(regularUser1)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // Here Output is in The Form Of Array and here only prints keys.
console.log(Object.values(tinderUser))  // Print all values under tinderUser and apply loop to transverse array.
console.log(Object.entries(tinderUser)) // prints an array conatain key pair of [key and values]
 
console.log(tinderUser.hasOwnProperty('suscription')) // use to find Properies in object returns ->(T/F)





