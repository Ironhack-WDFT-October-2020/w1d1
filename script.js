// start here :
/*
Developed 1995 at Netscape for user interactions in the browser - 
in 10 days has nothing to do with Java, just
a marketing gag
*/

// our main resource is always the basis documentation - for javascript it is MDN 


/*
We can execute JavaScript: 
- in the browser (link the file to an html file)
- execute the file directly via node js (later in the course) 
- use a tool that can execute js direcly (Codepen, REPL or RunJS)
*/


/*
    this is a multiline comment
*/

// this is a single line comment


// shortcuts for mac : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

// shortcuts for windows : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf  

// what is variable ?  a named storage

// declaring a variable
let client;
// declaring multiple variables at once
let cat, mouse;

// assignment
cat = 'Tom';

// variable is initialized
// = assignment operator
let name = 'Yoda';

// if variable is only declared it is undefined
// we can use console.log() to log sth to the console
console.log(mouse);

// There is also console.error() and console.warn()



// declaration and initialization at once 
// the variable name is called indentifier
let age = 31;

// naming 
// there are 2 difficult things in computer science cache invalidation and naming
// why is naming important ?
// what is the worst variable name? data - second worst data2 
// abbreviations are ambigious : what is char ? character or characteristic , what does mod mean?
// multiple meaningless is still meaningless: AbstractObjectFormatter
// use precise words : instead of manager - is it a supervisor, builder, planner 

// variable names should be descriptive and concise
let a = 56; // ❌
let user;

/*
some names are not possible
 the first character must be a letter, or an underscore (_), or a dollar sign ($).
Subsequent characters may be letters, digits, underscores, or dollar signs.
variable names cannot begin with numbers
reserved keywords
*/

// let for = 'abc'; ❌

// use camelCase
let userName;


// variables declared with let can be reassigned
name = 'James';

// variables declared with const cannot be reassigned
const port = 3000;
// port = 5555; // ❌  

// use const whenever possible
// never use var



// Data types

// Data types - number and string 

// There are two types of data types - objects and primitive data types

// 6 primitive types: number, string, boolean, null, undefined, symbol

// you can check the type with typeof
let userName = 'joe';

console.log('the type is now:', typeof userName);

userName = 42;

console.log('the type is now:', typeof userName);


// javascript is dynamically typed - there are other languages that are static or strong typed
// in java for example you choose the type when you declare a type
// in javascript the type is determined at runtime - javascript is interpreted and java or typescript is compiled 


// Numbers

// numbers can be integers and floating numbers
const distance = 70000;
const price = 19.99;


// also to Number belongs NaN - which stands for Not a number - a computational error;
// [ in Python this would return 'hellohellohello' ]
console.log('hello' * 3);

// Math operators
const sum = 1 + 1; // addition
1 - 0; // subtraction
6 * 7; // multiplication
4 / 2; // division

// Modulo
4 % 2; // modulo (remainder)
3 ** 3; // exponentiation

// Expression is the combination of any values and operator that results in another value
2 + 4 * 3;

// Assignment operators
let x = 0;

// add 1 - addition asignment
x += 1; // x = x + 1;

// subtract 2
x -= 2; //x = x - 2;

// multiply by 3
x *= 3; // x = x * 3;

// divide by 4
x /= 4; // x = x /4;

// modulo 5
x %= 5; // x = x % 5

// to the power of 6
x **= 6; // x = x ** 6


// Strings 

// A string is a sequence of characters
name = 'Jack';
name = "Jack";
name = `Jack`;

// backticks can embed variables 
// const greeting = `Hello ${name}`;

// use backslash to escape special characters and to add a newline
const list = ' coffee \n apples \n club mate';
console.log(list);

// string properties and methods
// useful property of a string is length
console.log('hello world'.length); // 11

// string methods
const greeting = 'Hello';

// accessing characters
greeting.charAt(0);
greeting[0];

name = 'Jane Doe'

let country = 'France';

// strings can be concetanetad with the plus sign

let customGreeting = greeting + ' ' + name + ' from ' + country;

// same result can be achieved using backticks and variable interpolation
// const customGreeting = `${greeting} ${name} from ${country}`;

// We can also concatenate to the string with the plus equal operator
// customGreeting = customGreeting + "!!!";
customGreeting += '!!!';

let firstName = 'John';
let lastName = 'Doe';

const initials = firstName[0] + lastName[0];

// Using the square bracket notation, target the last character in `customGreeting`

const lastChar = customGreeting[customGreeting.length - 1];

// .length is a property that comes with values of type string

// indexOf
// target.indexOf(substring) -> return the position of the first occurence of the substring in the target string, or -1

greeting.indexOf("H"); // 0
greeting.indexOf("h"); // -1
greeting.indexOf("lo"); // 3
greeting.indexOf("l"); // 2

// lastIndexOf works as indexOf but from the end of the string
greeting.lastIndexOf("l"); // 3


// Slice()
// slice returns a substring from a string with a given range specified as parameters
name.slice(0, 4); // "Jane" 0 to 4 exclusive
name.slice(5); // "Doe" only one parameter -> from there to the end
name.slice(); // "Jane Doe" without parameter -> everything

// nice trick : 
'helloworld'.slice(- 1) // returns the last character of the string


// Turn name, 
let name = 'alice';
name = name.charAt(0).toUpperCase() + name.slice(1)
// 'Alice'


// Strings, like numbers and all the other primitives are immutable -> meaning they can't be altered



// boolean - undefined and null - immutability
// boolean expression evaluates either to true or false

// boolean operators


// Boolean expressions
5 > 3; // true
0 <= -1; // false

// const firstName = 'Tim';
// firstName === 'Tim'; // true
// firstName === 'Pauline'; // false

// Equal vs strictly equal
4 === '4' // false
4 == '4' // true

// The == works because of type casting

/*
If an operand is a string and the other operand is a number, the string is converted to a number.
If an operand is a number and the other operand is a boolean, the boolean is converted to a
number as follows: true becomes 1, and false becomes 0.
*/

// Logical operators

// falsy values are : 0, '', null, undefined, NaN

// OR ||
// the || operator will evaluate to the first truthy expression it encounters, or to the last falsy expression
5 > 3 || 10 || "abc"; // true
false || 0 || 42 || "def"; // 42
4 < 3 || "" || 0 || NaN; // NaN

// AND &&
// the && operator will evaluate to the first falsy expression it encounters or to the last truthy expression
true && 1; // 1
42 && null && undefined && "xyz"; // null
-1 && "2" && -3; // -3

// NOT !
// the ! operator will return a boolean that is the negated value of the expression
!false; // true
!42; // false
!(4 > 2); // false


// undefined vs null

let foo;
console.log(foo); // undefined

// undefined represents the unintentional absence of value
(10).length; // undefined

// null represents the intentional absence of value




// Conditionals and loops

/*
This section deals with Control Structures - in Computer Science there are three control structures:
• Sequence: writing instructions one after the other
• Selection: either execute one set of instructions, or another
• Iteration: execute a set of instructions a finite or infinite number of times
*/

// Let's look at the selection part for now -> Conditionals


/*
const age = Number(prompt("How old are you?"));
if (age >= 18) {
  alert("You can apply for a driving license in Germany");
} else if (age === 17) {
  alert("You can apply for accompanied driving");
} else {
  alert("You are too young to apply for a driving license");
}
// if we have more complicated if else statements we can also use switch case
const language = prompt("What is your mother tongue?");
switch (language) {
  case "french":
    console.log("Bonjour!");
    break;
  case "english":
    console.log("Hello!");
    break;
  case "spanish":
    console.log("Hola!");
    break;
  case "italian":
    console.log("Ciao!");
    break;
  default:
    console.log("Non recognized language");
}
// Iterations - Loops
// for loop
for (let i = 1; i < 11; i ++) {
  console.log(i);
}
// exactly the same with the while loop: 
/*
the last number you see is because of "the console also displays the value of the last expression 
executed in the code you run there." And this is something that expression returns
*/

let counter = 1;
while (counter < 11) {
    console.log(counter);
    counter++;
}


// use case for while

let password = prompt('enter password');
while (password !== '123') {
    password = prompt('enter password');
}
alert('password is correct');
