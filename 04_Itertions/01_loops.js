// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index == 7) console.log("7 is Best Number");
    console.log(element)
    
}

for (let i = 1; i < 10; i++) {
    console.log(`*** Table of ${i} ***`)
    for (let j = 1; j <= 10; j++) {
    console.log(i +' * '+ j + ' = ' + i*j);
        
    }
    
}

let myArray = ["IronMan", "SuperMan", "Thor", "Hulk", "SpiderMan", "Flash"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
    
}

// break & continue in js
//break 

// for (let i = 0; i <  20; i++) {
           
//                 if(i == 5){
//                 console.log(`Number Detected = ${i}`)
//                 break;   
//             }
//                 console.log(`Value of i = ${i}`)
// }    

// continue 

for (let i = 0; i <  20; i++) {
           
    if(i == 5){
    console.log(`Number Detected = ${i}`)
    continue;   
}
    console.log(`Value of i = ${i}`)
}    

// while loop
let i=0
while(i<=10){
    console.log("Even Number is: " +i)
    i = i+2;
}

// do While loop

let score = 11
do {
    console.log("Your Score is:" + score)
    score++;
} while (score < 10);
