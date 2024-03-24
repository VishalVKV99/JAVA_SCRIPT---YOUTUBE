// stack(primitive) , heap(Non-Primitive)
let myMail = "vkv@gmail.com";
let myAnotherMail = myMail   //here copy of data takes palce(copy diya jata hai jisme assign ho rha hai)
myAnotherMail = "verma@gmail.com"
console.log(myMail)     // change in copy does not effect original data
console.log(myAnotherMail)  

let user = {
    email:"user1Gmail.com",
    upiId:"user@ybl",
    userNum: 9876418456,

}
// all above are get copied and goes to 'heap'

let userTwo = user;
 userTwo.email = "idChanged@gmail.com";
 console.log(user)
 console.log(userTwo)   // mail-Id Changed in Both user and userTwo 
                        //use to non-primitive(HEAP)
                        // directly changes takes place with orignal Data
                        //Stored in Heap Memory.

