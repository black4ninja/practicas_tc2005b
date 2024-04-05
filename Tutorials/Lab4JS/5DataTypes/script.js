let message = "hello";
message = 123456;

//NUMBER
let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity

alert( "not a number" / 2 ); // NaN, tal división es errónea


alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


//BIGINT
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

const bigInt = 1234567890123456789012345678901234567890n;

//STRING
/*
    En Javascript existen 3 tipos de comillas
    1. Dobles: "Hello".
    2. Simples: 'Hello'.
    3. Backticks: `Hello`.
*/
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


//BOOLEAN
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;
alert( isGreater ); // true

//NULL
let age = null;

//UNDEFINED
let age2;
alert(age2); // shows "undefined"


let age3 = 100;
// change the value to undefined
age3 = undefined;
alert(age3); // "undefined"

//EL OPERADOR typeof

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
