// console.log('works!')

// this is a comment
/*
multiline comment
*/

// variables - named storage

// declaring a variable
// declaration and initialization at once
var cat = 67;
// console.log(cat);
// console.error('sth went wrong');

// assignments
// cat = 'Tom';

// reassigning a variable

cat = 'Tom';
// console.log(cat);
// const cannot be reassigned

// data types
// number and string
cat = 42;
// console.log('length of cat: ', cat.length);
// console.log(typeof cat);

// Numbers
// integers or floating Numbers
const distance = 7000;
// const price = 19.99;
// console.log('hello' * 3);
// math operators
const sum = 1 + 3;
// 4 - 3
// 5 * 5
// 6 / 3
// modulo
// console.log(5 % 2);
// exponentiation
// console.log(5 ** 2);

// shorthand operators
let x = 0;
// x = x + 1;
x += 1 // -> x = x + 1
// x++
// console.log(x++); // -> x : 0

// console.log(x);

// Strings

// a string is a sequence of characters

// let name;
// const greeting = 'Hello';
// name = 'Jack';
const dog = "Bob";
// console.log('Hello ' + name);
// console.log(`Hello 
// World ${name} and ${dog}`);
const list = 'coffee \n apples \n club mate'
// console.log(list);

// string properties and methods

// console.log(name.length);

// accessing characters
// console.log(name[3]);
// console.log(name.charAt(3));

// name += '!'
// name = name + '!'
// console.log(name);
// const user = 'timmy';
// console.log(user.indexOf('m'));
// console.log(user.lastIndexOf('m'));

// slice
// slice returns a substring from a string with a
// given range as parameters
// console.log(user.slice(- 1));
// console.log(user);
// console.log(user.toUpperCase())
// const upperCasedUser = user[0].toUpperCase() + user.slice(1)
// console.log(upperCasedUser);
// console.log(user);

// console.log('hello');

// boolean, undefined null

// console.log(3 >= 3);
// equality operator
const name = 'tim';
console.log(name === 'tim');
console.log(4 === '4');
// console.log(true * 3);

// truthy and falsy values
// falsy values are 0, '', null, undefined and NaN
const input = '';
if (input !== '') {
    console.log('correct');
}

// logical operators 
// logical or : ||
// the || operator will evaluate to the first truthy expression
// or the last falsy expression
// const bool = '' || null
const userRole = 'admin';
const role = userRole || 'user'
console.log(role);
// logical And &&
const price = 23
if (price > 20 && price < 30) {
    console.log('price is correct');
}
// the logical And evaluate to the first falsy expression or the last truthy
const bool = 0 && 1
console.log(bool);
console.log(!true);

// undefined and null
// undefined is the unintentional absence of a value 
// null is the intentional absence of a value

let foo = null;
console.log(foo); // -> undefined

// Conditionals and loops
// const age = prompt('how old are you?');
// console.log(typeof age); // -> prompt returns a string 
// if (age >= 18) {
//     alert('you are allowed to drive a car');
// } else if (age == 17) {
//     alert('you are allowed to drive accompanied')
// } else {
//     alert('you are not allowed to drive')
// }

// switch case

// const language = prompt('what is your language?');
// switch (language) {
//     case 'english':
//         console.log('hello');
//     // break;
//     case 'french':
//         console.log('bonjour');
//     // break;
//     case 'hebrew':
//         console.log('shalom');
//         break;
//     default:
//         console.log('language unknown');
// }


// Iterations - loops

// for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// use case for a while loop 
const correctPassword = prompt('what should be the password?');
let password = prompt('enter password');
while (password !== correctPassword) {
    password = prompt('enter password');
}
// this means the password is correct
alert('password correct');













