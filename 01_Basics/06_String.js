const name = "Vishal"
const age  = 22
//console.log(name + age) // Out-Dated Format to represent

console.log(`My Name is  ${name} and my Age is ${age}`);  // moder way to represent 
                                                        // using backTick

console.log(`My Name is ${name} and my age is ${age}`)

// Another way to Represent String 
const superhero = new String('IronMan')
console.log(superhero[4])
console.log(superhero.__proto__)  // are used to Access protoType(all diff Methods)
console.log(superhero.length)
console.log(superhero.toLocaleUpperCase())  // representation in UpperCase of String
console.log(superhero.charAt(5)) // represents character at given position
                                // Also it does not effect orignal value 
console.log(superhero.indexOf('M'))  //represents Index Number

const subString = superhero.substring(0,5)  // print all 5 letters starting from 0-5;

const subString1 = superhero.slice(-7,4)
console.log(subString1)

const naam = "     india          "
console.log(naam)
console.log(naam.trim())  // Removes the leading 
      //and trailing white space and line terminator characters from a string.

      const url = "https://vishal.com//vishal%20verma"

      console.log(url)
      console.log(url.replace('%20','-')) // used to replace values 

      console.log(url.includes('vema'))  // used to find string also result in bool

      const books = "algebra,diwa,arithant,rs-agrawaal,ml-khanna,"
      console.log(books.split(','))  // it gives output in array format






