let x = 1;

x = -x;
console.log( x ); // -1

let x1 = 1, y1 = 3;
console.log( y1 - x1 ); // 2


console.log( 5 % 2 ); // 1
console.log( 8 % 3 ); // 2
console.log( 8 % 4 ); // 0

console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" y no "221"
console.log('1' + 2 + 2); // "122" y no "14"

console.log( 6 - '2' ); // 4, convierte '2' a número
console.log( '6' / '2' ); // 3, convierte ambos operandos en número


// No effect on numbers
let x2 = 1;
console.log( +x2 ); // 1

let y2 = -2;
console.log( +y2 ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let a, b, c;
a = b = c = 2 + 2;
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

let n = 2;
n = n + 5;
n = n * 2;

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log( n ); // 14


let counter = 2;
counter++;        
alert( counter ); // 3


let counter2 = 2;
counter2--;       
alert( counter2 ); // 1
