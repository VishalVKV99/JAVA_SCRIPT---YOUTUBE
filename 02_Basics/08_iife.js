// IIFE  -> Immediately  invoked Functions Expression 

// it is used when we have to immediately call our function while 
//program is executed without polluted/interference of global variable.
// It is Written as ⬇️
// Global scope se pollution hoti hai kai baar function mei us problem ko hatane k liye hm iife ka use karte ahi
/*(function chai(){
    console.log(`DB CONNECTED `)
})()
*/
// below are immediately invoked function 
// yahan invoke toh ho hya lekin pta nahi invoke rokna kahan hai iske lye isse 'and ' krna padta hai aur isse end krna padta hai then we use semicolon(;)

// way to Write Two IIFE at a Time ⬇️

(function chai(){
    // yeh ek named IIFE hai
    console.log(`DB CONNECTED `)
})();

// (function aurCode(){
//     console.log(`DB CONNECTED TWO`)
// })()

((name)=>{    
    //unmaned IIFE                                   // arrow function
    console.log(`DB CONNECTED TWO ${name}`)
})('Vishal')
