let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) console.log( 'You are right!' );

if (year == 2015) {
    console.log( "That's correct!" );
    console.log( "You're so smart!" );
}


if (0) { // 0 es falso
    //...
}

if (1) { // 0 es verdadero
    //...
}


let cond = (year == 2015); // evalua para verdadero o false
if (cond) {
    //...
}


let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year2 == 2015) {
    console.log( 'You guessed it right!' );
} else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
}


let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed);

let result = condition ? value1 : value2;
let accessAllowed2 = (age > 18) ? true : false;


let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
(age2 < 18) ? 'Hello!' :
(age2 < 100) ? 'Greetings!' :
'What an unusual age!';

console.log( message );


if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}


let a = 2 + 2;

switch (a) {
case 3:
    console.log( 'Too small' );
    break;
case 4:
    console.log( 'Exactly!' );
    break;
case 5:
    console.log( 'Too big' );
    break;
default:
    console.log( "I don't know such values" );
}

let a1 = 3;

switch (a1) {
case 4:
    console.log('Right!');
    break;

case 3: // (*) grouped two cases
case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

default:
    console.log('The result is strange. Really.');
}
