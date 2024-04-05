function showMessage() {
    console.log( 'Hello everyone!' );
}
showMessage();
showMessage();



function name(parameter1, parameter2, ... parameterN) {
    // código
}



function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

console.log( message ); // <-- Error! The variable is local to the function



let userName = 'John';

function showMessage() {
let message = 'Hello, ' + userName;
alert(message);
}

showMessage(); // Hello, John



let userName2 = 'John';

function showMessage() {
    userName = "Bob";

    let message = 'Hello, ' + userName2;
    console.log(message);
}

console.log( userName );
showMessage();
console.log( userName );


function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)



function showMessage(from, text = "no text given") {
    console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
showMessage("Ann", undefined);



function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3
